import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "@/context/DataContext";

function HomeServices() {
    const { posts, loadPosts, loading } = useContext(DataContext);

    // fetch posts on mount
    useEffect(() => {
        // load all 9 posts
        loadPosts({ per_page: 9, _embed: true });
    }, [loadPosts]);

    return (
        <div className="services">
            <div className="services__wrapper">
                <h2 className="heading__sec">店舗・法人向けサービス</h2>
                <div className="services__list">
                    <div className="services__block">
                        <div className="container -md">
                            <div className="heading__top">
                                <h3 className="heading__primary">卸価格で販売</h3>
                                <p className="kagoshima__text">お福分け青汁を自分のショップや店舗のサービスとしてご利用したい方へは、卸価格にて販売しております。<br />
                                    お問い合わせ頂ければ、弊社よりご連絡致しますのでお気軽にご相談ください。
                                </p>
                            </div>
                            <div className="services__col">
                                <p className="kagoshima__text pb-15">取扱い事例</p>
                                <div className="services__img">
                                    <img src="/hoip_headless/assets/img/services/img01.jpg" alt="取扱い事例" width="805" height="281"
                                        className="img-fluid" loading="lazy" />
                                </div>
                                <div className="services__content">
                                    <p className="kagoshima__text">fuca. -eyelash&kampo steam-</p>
                                    <p className="kagoshima__text pb-15">
                                        3種のカテゴリーが体感できる下北隠れ家サロン。よもぎ蒸しのメニューでお福分け青汁もお試しいただくことができます。</p>
                                    <p className="kagoshima__text">東京都世田谷区北沢２－３３－１２ 柳川ビル２０２ <br />
                                        最寄駅　下北沢</p>
                                    <a href="https://beauty.hotpepper.jp/kr/slnH000650689/"
                                        className="services__link">https://beauty.hotpepper.jp/kr/slnH000650689/</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__block margin">
                        <div className="services__bg">
                            <div className="container -md">
                                <div className="heading__top">
                                    <h3 className="heading__primary">オリジナルのパッケージで生産・販売</h3>
                                    <p className="kagoshima__text">
                                        お福分け青汁は3gの個包装の状態での納品になります。オリジナルのパッケージなどを作成して頂き、中身のみをご利用いただくことも可能です。お好きな組み合わせや自社製品とまとめてのパッケージなど自由にカスタマイズできます。また、パッケージなどを弊社で製作することも可能ですのでお気軽にご相談ください。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__block">
                        <div className="container -md">
                            <div className="heading__top">
                                <h3 className="heading__primary">販促品・ノベルティとしてご製作</h3>
                                <p className="kagoshima__text">オリジナルのロゴをプリントした台紙やパッケージで、販促用・ノベルティなどとしてご製作することも可能です。</p>
                            </div>
                            <div className="services__col">
                                <p className="kagoshima__text pb-26">取扱い事例</p>
                                <div className="services__row">
                                    <a href="#" className="services__tab">
                                        <div className="services__pic">
                                            <img src="/hoip_headless/assets/img/ofukuwake/img1.jpg" alt="株式会社ワークポート" width="400"
                                                height="232" className="img-fluid" loading="lazy" />
                                        </div>
                                        <div className="services__content">
                                            <p className="kagoshima__text">株式会社ワークポート</p>
                                            <p className="kagoshima__text">社内のウェルビーイングの一環として製作しました。</p>
                                        </div>
                                    </a>
                                    <a href="#" className="services__tab">
                                        <div className="services__pic">
                                            <img src="/hoip_headless/assets/img/ofukuwake/img1.jpg" alt="株式会社〇〇〇" width="400"
                                                height="232" className="img-fluid" loading="lazy" />
                                        </div>
                                        <div className="services__content">
                                            <p className="kagoshima__text">株式会社〇〇〇</p>
                                            <p className="kagoshima__text">お客様へのプレゼントとして製作しました。</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services__bg2">
                        <button type="submit" className="btn-submit">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31px"
                                height="23px">
                                <image x="0px" y="0px" width="31px" height="23px"
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAXCAQAAABZ9FzfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfpAwYMNxeFmhlxAAABLUlEQVQ4y+3UOy+DURjA8f/7tovF4JJ0MHXBKDGYSYpECBEjn0LiE0jTmEQaNrtR4kOgSheXXUOkxVCJuvwNbbShSt/ZOdvJ88tzyZMTCMuME0c6OwFFtgJXyVDihaBDLgmuAs8pk+K1Qwwwzl6cGGUqETBc8xTyTjwShhgh5qyYsVc6vLMWfMRjH3313rQ9f6YLFtSiN3jhvkmzatl1+3+l856pOScc8xYvPBBx0B31wYx9P9I58+qJKUNxxLsGRxxyU7033WIWS56qeSeN1V9Gv/JaFVv1RhqzWLSg5p3+pD/yWhVZteSGiXqvh01Zf+WIw26rVfXIKcMWEW15rZE1Z75lbeLtN+6SdPvFCyMu7D8nJOQton3BOM8M0EU1wl+XpDtwhV1KkXiC3Afe4ny+DPKoEAAAAABJRU5ErkJggg==" />
                            </svg>
                            <span> お問い合わせをする</span>
                        </button>
                    </div>
                    <div className="services__block">
                        <div className="ofukuwake">
                            <div className="container">
                                <div className="ofukuwake__wrapper">
                                    <div className="ofukuwake__top">
                                        <img src="/hoip_headless/assets/img/ofukuwake/img1.png" alt="お役立ちコラム" width="234"
                                            height="223" className="img-fluid" loading="lazy" />
                                        <h2 className="heading__sec">お役立ちコラム</h2>
                                        <p className="kagoshima__text center">
                                            オリジナルのロゴをプリントした台紙やパッケージで、販促用・ノベルティなどとしてご製作することも可能です。</p>
                                    </div>
                                    <div className="category__products">
                                        <div className="ofukuwake__row main">
                                            {loading ? (
                                                <p>Loading posts...</p>
                                            ) : posts.length > 0 ? (
                                                posts.slice(0, 9).map((post) => (
                                                    <div className="ofukuwake__col" key={post.id}>
                                                        <span className="ofukuwake__col-title">
                                                            {post._embedded?.["wp:term"]?.[0]?.[0]?.name || "レシピ"}
                                                        </span>
                                                        <Link to={`/category/${post.slug}`}>
                                                            <img
                                                                src={
                                                                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                                                    "/hoip_headless/assets/img/ofukuwake/img1.jpg"
                                                                }
                                                                alt={post.title.rendered}
                                                                width="301"
                                                                height="203"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                            />
                                                        </Link>
                                                        <div className="ofukuwake__content">
                                                            <p className="kagoshima__text padding">
                                                                {post.title.rendered}
                                                            </p>
                                                            <span className="ofukuwake__date">
                                                                {new Date(post.date).toLocaleDateString("ja-JP", {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                })}
                                                            </span>
                                                            <p className="kagoshima__text">
                                                                {post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
                                                                    "No description available"}
                                                            </p>
                                                            <Link to={`/category/${post.slug}`} className="ofukuwake__btn">
                                                                つづきを読む
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No posts available.</p>
                                            )}
                                        </div>
                                        <div className="ofukuwake__button">
                                            <a href="/hoip_headless/category" className="primary__btn category__products-more">もっと見る</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeServices;
