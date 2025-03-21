import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DataContext } from "@/context/DataContext";
import Card from "@/components/Card";
import CategorySidebar from "@/components/CategorySidebar";
import SidebarShop from "@/components/SidebarShop";
import SidebarShare from "@/components/SidebarShare";

function ColumnCategory() {
    const { categorySlug } = useParams();
    const { posts, loadPosts, categories, loading } = useContext(DataContext);
    const [visiblePosts, setVisiblePosts] = useState(6);

    useEffect(() => {
        if (categories.length === 0) {
            return;
        }

        if (categorySlug) {
            const category = categories.find((cat) => cat.slug === categorySlug);
            
            if (category) {
            
                loadPosts({ categories: category.id, per_page: 100, _embed: true }); // Changed to 100
            } else {
            
                loadPosts({ per_page: 100, _embed: true }); // Changed to 100
            }
        }
        setVisiblePosts(6);
    }, [categorySlug, categories, loadPosts]);

    const currentCategory = categories.find((cat) => cat.slug === categorySlug);

    if (!currentCategory) {
        return (
            <>
                <Header />
                <main id="main">
                    <section className="category">
                        <div className="container -lg">
                            <p>Category "{categorySlug}" not found.</p>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const handleLoadMore = (e) => {
        e.preventDefault();
        setVisiblePosts((prev) => Math.min(prev + 6, posts.length));
    };

    return (
        <>
            <Header />
            <div className="pagetitlebar">
                <picture className="pagetitlebar__picture">
                    <img
                        src={
                            currentCategory.acf?.cat_image?.source_url ||
                            "/hoip_headless/assets/img/pagetitlebar/pagetitlebar-category.jpg"
                        }
                        alt={currentCategory.name}
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
                            <Link to="/column" className="breadcrumb__link">
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
                        <img
                            src="/hoip_headless/assets/img/common/shop-white.png"
                            alt="Contact"
                            width="24"
                            height="30"
                            loading="lazy"
                            className="img-fluid"
                        />
                        <span>オンラインショップで購入する</span>
                    </a>
                    <div className="container -lg">
                        <div className="category__wrapper">
                            <div className="category__main">
                                <h2 className="kagoshima__text">お役立ちコラム</h2>
                                <div className="category__intro">
                                    <h3 className="category__intro-heading">{currentCategory.name}</h3>
                                    <p className="category__intro-text kagoshima__text">
                                        {currentCategory.description}
                                    </p>
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
                                                        post.featured_media_url ||
                                                        "/hoip_headless/assets/img/default-placeholder.jpg"
                                                    }
                                                    date={new Date(post.date).toISOString().split("T")[0].replace(/-/g, "/")}
                                                    description={
                                                        post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
                                                        "No description available"
                                                    }
                                                    slug={post.slug}
                                                    categoryName={currentCategory.name}
                                                    linkTo={`/column/${categorySlug}/${post.slug}`}
                                                    catSlug={currentCategory.slug}
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

export default ColumnCategory;