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
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"
                                height="30px">
                                <image x="0px" y="0px" width="24px" height="30px"
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfpAwcPHyTd7Q/xAAABxUlEQVQ4y43Uv2sTcRiA8U++RAM2tSlFWlpjG3BwFHFwcRBXF/+Ciu6OLoKTOIjg1kF06VhQqIi421HBqSpif6m01bba2tSKbV6HxGAT7eW54Xjv3ufee9+XO6HtOB2PYi2W40Ecbb/bnj4atViNezEe1fgcp7KESmzHRPSGEIPxKt5GYX9hLDaivxmdiYir+wuLcWtP/Dim9mbk1TlhSE3FgF3n5BpXaxacd0FVzrz3aFS4EbuRxVZcCSEXFC1aNanmrJPu225WCCWjnnsp75IVx+3WJxNxM4S4EzstPRUj4noI8TTWoxgSBvAVvDPZ7OpPF29sgVlFXeRRxjcw4YmdPcKWi36BOUm/5YThpnDXa932MuaZhBkM1iuMNIXbxlVbhGsOqWG5nplHpREybVorLxrnzbqQcMRPS7LYrD86SQ5bsp4pVNUMkhSUfGxMYj82rCnJJQU95jPTqVrU40DSp2CmA4EFJQeTwcaMs5lR1J2U8aEjYVbOQFKhgxlpvMdQMkLbdv/NCoaTYfWlZLOJStJny/eOhZH6njsVdhxLes21fAP/44sl5bwuOyodCckPFTGV+b/4m4e5KLusr6MK4ZOx3400XteAB4VZAAAAAElFTkSuQmCC" />
                            </svg>
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.9464519567734!2d139.70987475737837!3d35.648693954562184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4196d577a1%3A0xdeb3dd2a34f0b3c5!2zVCZU44OT44Or!5e1!3m2!1sen!2sjp!4v1735020401018!5m2!1sja!2sjp"
                                width="863" height="298" style={{ border: 0 }} allowFullScreen="" loading="lazy"
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
