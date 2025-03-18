import { useParams } from "react-router-dom";
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

function CategoryDetail() {
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
                        const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
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
    console.log(post);
    
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
                                        <a href="/" className="breadcrumb__link">お福分け青汁</a>
                                    </li>
                                    <li className="breadcrumb__item">
                                        <a href={`/hoip_headless/category/${post.categories[0]}`} className="breadcrumb__link">
                                            {categoryNames[post.categories[0]]}
                                        </a>
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

export default CategoryDetail;