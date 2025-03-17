// import { memo } from "react";
// import Card from "@/components/Card";

// function RelatedPosts({ relatedPosts }) {
//     return (
//         <div className="related-posts">
//             {relatedPosts.length > 0 ? (
//                 relatedPosts.map((post) => (
//                     <Card
//                         catId={post.categories[0]}
//                         key={post.id}
//                         title={post.title.rendered}
//                         image={post.featured_media_url || "/default-image.jpg"}
//                         date={new Date(post.date).toLocaleDateString()}
//                         description={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
//                         slug={post.slug}
//                     />
//                 ))
//             ) : (
//                 <p>No related posts found.</p>
//             )}
//         </div>
//     );
// }

// export default memo(RelatedPosts);

import { memo } from "react";
import Card from "@/components/Card";

function RelatedPosts({ relatedPosts, categories }) {
    // Helper function to get category name from ID
    const getCategoryName = (categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        return category ? category.name : "Unknown Category";
    };

    return (
        <div className="related-posts">
            {relatedPosts.length > 0 ? (
                relatedPosts.map((post) => (
                    <Card
                        key={post.id}
                        title={post.title.rendered}
                        image={
                            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                            "/hoip_headless/assets/img/default-placeholder.jpg"
                        }
                        date={new Date(post.date).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                        description={
                            post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "No description available"
                        }
                        slug={post.slug}
                        categoryName={getCategoryName(post.categories[0])} // Pass category name
                    />
                ))
            ) : (
                <p>No related posts found.</p>
            )}
        </div>
    );
}

export default memo(RelatedPosts);