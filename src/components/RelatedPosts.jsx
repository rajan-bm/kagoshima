import { memo } from "react";
import Card from "@/components/Card";

function RelatedPosts({ relatedPosts, categories }) {
    // Helper function to get category name from ID
    const getCategoryName = (categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        return category ? category.name : "Unknown Category";
    };
    return (
        <>
            {relatedPosts.length > 0 ? (
                relatedPosts.slice(0, 6).map((post) => (
                    <Card
                        key={post.id}
                        title={post.title.rendered}
                        image={
                            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                            "/hoip_headless/assets/img/default-placeholder.jpg"
                        }
                        date={new Date(post.date).toISOString().split("T")[0].replace(/-/g, "/")}
                        description={
                            post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "No description available"
                        }
                        slug={post.slug}
                        categoryName={getCategoryName(post.categories[0])}
                        catSlug={post._embedded?.["wp:term"]?.[0]?.[0]?.slug || "レシピ"}
                    />
                ))
            ) : (
                <p>No related posts found.</p>
            )}
        </>
    );
}

export default memo(RelatedPosts);