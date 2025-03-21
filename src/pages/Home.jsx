import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSharing from "@/components/home/HomeSharing";
import HomeServices from "@/components/home/HomeServices";

function Home() {
    return (
        <>
            <Header />
            <main id="main">
                <section className="hero">
                    <div className="hero__img">
                        <img src="/hoip_headless/assets/img/mv/mv.jpg" alt="おいしい自然は鹿児島にありました。" width="1200" height="698" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="hero__wrapper">
                        <h1 className="hero__title"><span>おいしい自然は</span><br />鹿児島にありました。</h1>
                        <a href="#" className="btn-submit -shop">
                            <img src="/hoip_headless/assets/img/common/shop-white.png" alt="Contact" width="24" height="30" loading="lazy" className="img-fluid" />
                            <span>オンラインショップで購入する</span>
                        </a>
                    </div>
                </section>

                <section className="water-wave">
                    <div className="sharing-upwave">
                        <svg className="onde" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="onda" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z" />
                            </defs>
                            <g className="parallaxonde">
                                <use xlinkHref="#onda" x="48" y="0" fill="#009944" />
                            </g>
                        </svg>
                    </div>
                </section>
                <HomeSharing />
                <HomeServices />
                <section className="company" id="company">
                    <div className="company__wrapper">
                        <div className="company__header">
                            <img src="/hoip_headless/assets/img/common/company_logo.png" alt="会社案内" width="90" height="59" loading="lazy"
                                className="img-fluid" />
                            <h2 className="company__header-jp">会社案内</h2>
                        </div>
                        <div className="company__table">
                            <div className="company__table-tr">
                                <p className="company__table-th company__table-txt">
                                    会社名
                                </p>
                                <p className="company__table-td company__table-txt">
                                    hoip合同会社
                                </p>
                            </div>
                            <div className="company__table-tr">
                                <p className="company__table-th company__table-txt">
                                    設立
                                </p>
                                <p className="company__table-td company__table-txt">
                                    2024.11.25
                                </p>
                            </div>
                            <div className="company__table-tr">
                                <p className="company__table-th company__table-txt">
                                    代表
                                </p>
                                <p className="company__table-td company__table-txt">
                                    安藤美紀
                                </p>
                            </div>
                            <div className="company__table-tr">
                                <p className="company__table-th company__table-txt">
                                    住所
                                </p>
                                <p className="company__table-td company__table-txt">
                                    〒222-0037　<br className="d-md-none" />神奈川県横浜市港北区大倉山3-16-19
                                </p>
                            </div>
                        </div>
                        <div className="company__iframe">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1621.0731900922024!2d139.709809!3d35.648765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4196d577a1%3A0xdeb3dd2a34f0b3c5!2zVCZU44OT44Or!5e0!3m2!1sja!2sjp!4v1741684706229!5m2!1sja!2sjp"
                                width="863" height="298" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>
            </main >

            <Footer />
        </>
    );
}

export default Home;
