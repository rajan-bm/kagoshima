import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DataContext } from "@/context/DataContext";
import Card from "@/components/Card";
import CategorySidebar from "@/components/CategorySidebar";
import SidebarShop from "@/components/SidebarShop";
import SidebarShare from "@/components/SidebarShare";

function Category() {
    const { slug } = useParams();
    const { posts, loadPosts, categories, loading } = useContext(DataContext);
    const [visiblePosts, setVisiblePosts] = useState(6);

    useEffect(() => {
        if (categories.length === 0) return; // Wait for categories to load

        if (slug) {
            const category = categories.find((cat) => cat.slug === slug);
            if (category) {
                loadPosts({ categories: category.id, per_page: 100 });
            } else {
                console.warn(`Category with slug "${slug}" not found`);
                loadPosts({ per_page: 100 }); // Fallback to all posts
            }
        } else {
            const firstCategoryId = categories[0]?.id || 5;
            loadPosts({ categories: firstCategoryId, per_page: 100 });
        }
        setVisiblePosts(6); // Reset to 6 when category changes

    }, [slug, categories, loadPosts]);

    // Determine the current category
    const currentCategory = slug
        ? categories.find((cat) => cat.slug === slug) || { name: "レシピ" }
        : categories[0] || { name: "レシピ" };

    // Handle "Load More" button click
    const handleLoadMore = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setVisiblePosts((prev) => prev + 6); // Load 6 more posts
    };

    return (
        <>
            <Header />
            <div className="pagetitlebar">
                <picture className="pagetitlebar__picture">
                    <img
                        src={
                            currentCategory.acf?.cat_image?.source_url || "/hoip_headless/assets/img/pagetitlebar/pagetitlebar-category.jpg"
                        }
                        alt="{currentCategory.name}"
                        width="100%"
                        height="179"
                        loading="lazy"
                        className="img-fluid"
                    />
                </picture>
                <h1 className="pagetitlebar__text">
                    <span>おいしい自然は</span>鹿児島にありました。
                </h1>
            </div>

            <div className="breadcrumb">
                <div className="breadcrumb__wrapper">
                    <ul className="breadcrumb__list">
                        <li className="breadcrumb__item">
                            <Link to="/" className="breadcrumb__link">
                                お福分け青汁
                            </Link>
                        </li>
                        <li className="breadcrumb__item">
                            <Link to="/category" className="breadcrumb__link">
                                お役立ちコラム
                            </Link>
                        </li>
                        <li className="breadcrumb__item">{currentCategory.name}</li>
                    </ul>
                </div>
            </div>
            <main id="main">
                <section className="category">
                    <a href="#" className="btn-submit -shop">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="30px"
                        >
                            <image
                                x="0px"
                                y="0px"
                                width="24px"
                                height="30px"
                                xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfpAwcPHyTd7Q/xAAABxUlEQVQ4y43Uv2sTcRiA8U++RAM2tSlFWlpjG3BwFHFwcRBXF/+Ciu6OLoKTOIjg1kF06VhQqIi421HBqSpif6m01bba2tSKbV6HxGAT7eW54Xjv3ufee9+XO6HtOB2PYi2W40Ecbb/bnj4atViNezEe1fgcp7KESmzHRPSGEIPxKt5GYX9hLDaivxmdiYir+wuLcWtP/Dim9mbk1TlhSE3FgF3n5BpXaxacd0FVzrz3aFS4EbuRxVZcCSEXFC1aNanmrJPu225WCCWjnnsp75IVx+3WJxNxM4S4EzstPRUj4noI8TTWoxgSBvAVvDPZ7OpPF29sgVlFXeRRxjcw4YmdPcKWi36BOUm/5YThpnDXa932MuaZhBkM1iuMNIXbxlVbhGsOqWG5nplHpREybVorLxrnzbqQcMRPS7LYrD86SQ5bsp4pVNUMkhSUfGxMYj82rCnJJQU95jPTqVrU40DSp2CmA4EFJQeTwcaMs5lR1J2U8aEjYVbOQFKhgxlpvMdQMkLbdv/NCoaTYfWlZLOJStJny/eOhZH6njsVdhxLes21fAP/44sl5bwuOyodCckPFTGV+b/4m4e5KLusr6MK4ZOx3400XteAB4VZAAAAAElFTkSuQmCC"
                            />
                        </svg>
                        <span>オンラインショップで購入する</span>
                    </a>
                    <div className="container -lg">
                        <div className="category__wrapper">
                            <div className="category__main">
                                <h2 className="kagoshima__text">お役立ちコラム</h2>
                                <div className="category__intro">
                                    <h3 className="category__intro-heading">{currentCategory.name}</h3>
                                    <p className="category__intro-text kagoshima__text">{currentCategory.description}</p>
                                </div>
                                <div className="category__products">
                                    <div className="ofukuwake__row">
                                        {loading ? (
                                            <p>Loading...</p>
                                        ) : posts.length > 0 ? (
                                            posts.slice(0, visiblePosts).map((post) => (
                                                <Card
                                                    key={post.id}
                                                    title={post.title.rendered}
                                                    image={
                                                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                                        "/hoip_headless/assets/img/default-placeholder.jpg"
                                                    }
                                                    // date={new Date(post.date).toLocaleDateString("ja-JP", {
                                                    //     year: "numeric",
                                                    //     month: "long",
                                                    //     day: "numeric",
                                                    // })}
                                                    date={new Date(post.date).toISOString().split("T")[0].replace(/-/g, "/")}
                                                    description={
                                                        post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
                                                        "No description available"
                                                    }
                                                    slug={post.slug}
                                                    categoryName={currentCategory.name}
                                                />
                                            ))
                                        ) : (
                                            <p>No posts found.</p>
                                        )}
                                    </div>
                                    {posts.length > visiblePosts && !loading && (
                                        <div className="ofukuwake__button">
                                            <a
                                                href="#"
                                                className="primary__btn category__products-more"
                                                onClick={handleLoadMore}
                                            >
                                                もっと見る
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="category__sidebar">
                                <SidebarShare />
                                <CategorySidebar />
                                <SidebarShop />
                            </div>
                        </div>
                        <div className="category__comment">
                            <img
                                src="/hoip_headless/assets/img/ofukuwake/img1.png"
                                alt="お役立ちコラム"
                                className="img-fluid category__comment-img"
                                loading="lazy"
                                width="190"
                                height="181"
                            />
                            <p
                                className="category__comment-text kagoshima__text"
                                dangerouslySetInnerHTML={{
                                    __html: currentCategory.acf?.cat_coincerge || "Default comment text",
                                }}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Category;