import { Link } from "react-router-dom"; // Import if using React Router

function Footer() {
    return (
        <>
            <div className="scroll-up" id="js-scrollToTop">
                <img src="/hoip_headless/assets/img/common/btn-up-arrw.png" alt="scrollup" loading="lazy" width="62" height="62" className="img-fluid" />
            </div>

            <footer className="footer" id="footer">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <a href="/" className="footer__logo-link">
                            <img src="/hoip_headless/assets/img/common/company_logo.png" alt="hoip" loading="lazy" className="img-fluid" width="49" height="33" />
                        </a>
                        <p className="footer__logo-copyright">
                            &copy;hoip inc.
                        </p>
                    </div>
                    <div className="footer__end">
                        <div className="footer__category">
                            {/* Use Link if using React Router, otherwise use href="/" */}
                            <Link to="/hoip_headless/privacy" className="footer__category-link">個人情報保護方針</Link>
                            <Link to="/hoip_headless/contact" className="footer__category-link">お問い合わせ</Link>
                        </div>
                        <div className="footer__icons">
                            <a href="#" target="_blank" className="footer__icons-link">
                                <img src="/hoip_headless/assets/img/common/icon_twitter.svg" alt="Twitter" width="23" height="22" className="img-fluid" loading="lazy" />
                            </a>
                            <a href="#" target="_blank" className="footer__icons-link">
                                <img src="/hoip_headless/assets/img/common/icon_instagram.svg" alt="Instagram" width="25" height="25" className="img-fluid" loading="lazy" />
                            </a>
                            <a href="#" target="_blank" className="footer__icons-link line">
                                <div className="line-icon">
                                    <img src="/hoip_headless/assets/img/common/icon__line.svg" alt="LINE" loading="lazy" width="15" height="15" className="img-fluid" />
                                </div>
                                <p className="line-text">友だち追加</p>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
