import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/DataContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryName from "@/components/CategoryName";
import Post from "@/components/Post";
import CategorySidebar from "@/components/CategorySidebar";
import TableOfContents from "@/components/TableOfContents";
import RelatedPosts from "@/components/RelatedPosts";
import SidebarShop from "@/components/SidebarShop";
import SidebarShare from "@/components/SidebarShare";

function ColumnDetail() {
    const { slug } = useParams();
    const { fetchPostBySlug, fetchRelatedPosts, categories, loading } = useContext(DataContext);
    const [post, setPost] = useState(null);
    const [toc, setToc] = useState([]);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        setIsLoading(true);
        fetchPostBySlug(slug)
            .then((fetchedPost) => {
                if (mounted) {
                    if (fetchedPost) {
                        setPost(fetchedPost);
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(fetchedPost.content.rendered, "text/html");
                        const headings = doc.querySelectorAll("h2");
                        const tocItems = Array.from(headings).map((heading, index) => {
                            const text = heading.textContent.trim();
                            const id = heading.getAttribute("id") || `${text.replace(/\s+/g, "-").toLowerCase()}-${index}`;
                            heading.setAttribute("id", id);
                            return { text, id };
                        });
                        setToc(tocItems);
                        fetchedPost.content.rendered = doc.body.innerHTML;
                        const categoryId = fetchedPost.categories[0];
                        fetchRelatedPosts(categoryId, 7, fetchedPost.id).then((posts) => {
                            if (mounted) {
                                setRelatedPosts(posts);
                            }
                        });
                    } else {
                        setPost(null);
                    }
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                if (mounted) {
                    setPost(null);
                    setIsLoading(false);
                }
            });
        return () => {
            mounted = false;
        };
    }, [slug, fetchPostBySlug, fetchRelatedPosts]);

    const categoryNames = post?.categories?.reduce((acc, categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        acc[categoryId] = category ? category.name : "Unknown Category";
        return acc;
    }, {}) || {};

    return (
        <>
            <Header />
            {(isLoading || loading) ? (
                <div className="loading" style={{ padding: "20px", textAlign: "center" }}>
                    <p>Loading post...</p>
                </div>
            ) : (
                post ? (
                    <>
                        <div className="pagetitlebar">
                            <picture className="pagetitlebar__picture">
                                <img
                                    src={
                                        post.acf?.post_background_image?.source_url || "/hoip_headless/assets/img/pagetitlebar/pagetitlebar-category.jpg"
                                    }
                                    alt="{post.title.rendered}"
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
                                    <li className="breadcrumb__item">
                                        <Link to={`/hoip_headless/column/${post.categories[0]}` || ""} className="breadcrumb__link">
                                            {categoryNames[post.categories[0]]}
                                        </Link>
                                    </li>
                                    <li
                                        className="breadcrumb__item"
                                        dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
                                    />
                                </ul>
                            </div>
                        </div>
                        <main id="main">
                            <section className="category category-detail">
                                <a href="#" className="btn-submit -shop">
                                    <img src="/hoip_headless/assets/img/common/shop-white.png" alt="Contact" width="24" height="30" loading="lazy" className="img-fluid" />
                                    <span>オンラインショップで購入する</span>
                                </a>
                                <div className="container -lg">
                                    <div className="category__wrapper">
                                        <div className="category__main">
                                            <h2 className="kagoshima__text">お役立ちコラム</h2>
                                            <div className="category__intro">
                                                <div className="category__intro-flex">
                                                    <div className="category__intro-tags d-flex">
                                                        {post.categories.map((categoryId) => (
                                                            <CategoryName
                                                                key={categoryId}
                                                                categoryId={categoryId}
                                                                name={categoryNames[categoryId] || "Loading..."}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="category__intro-date">
                                                        {new Date(post.date).toISOString().split("T")[0].replace(/-/g, "/")}
                                                    </p>
                                                </div>
                                                <h4 className="heading__sec">{post.title?.rendered}</h4>
                                                <TableOfContents toc={toc} />
                                            </div>
                                            <div className="category__top">
                                                <img
                                                    src={
                                                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                                        "/hoip_headless/assets/img/default-placeholder.jpg"
                                                    }
                                                    alt={post.title?.rendered || "No Feature Image"}
                                                    width="100%"
                                                    height="512"
                                                    className="img-fluid"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <Post post={post} />
                                        </div>
                                        <div className="category__sidebar">
                                            <SidebarShare />
                                            <CategorySidebar />
                                            <SidebarShop />
                                        </div>
                                    </div>
                                </div>
                                <div className="category-detail__block">
                                    <div className="container -lg">
                                        <h3 className="heading__primary">おすすめの記事</h3>
                                    </div>
                                    <div className="category-detail__content">
                                        <div className="ofukuwake__row">
                                            <RelatedPosts relatedPosts={relatedPosts} categories={categories} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </>
                ) : (
                    <p>Post not found</p>
                )
            )}
            <Footer />
        </>
    );
}

export default ColumnDetail;