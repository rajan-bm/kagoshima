import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.pageYOffset;
            setIsVisible(scrollPos > 200); // Show after 200px scroll
        };

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Native smooth scroll
        };

        window.addEventListener("scroll", handleScroll);
        const scrollBtn = document.getElementById("js-scrollToTop");
        scrollBtn?.addEventListener("click", scrollToTop);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            scrollBtn?.removeEventListener("click", scrollToTop);
        };
    }, []);

    return (
        <>
            <div
                className="scroll-up"
                id="js-scrollToTop"
                style={{ display: isVisible ? "flex" : "none" }}
            >
                <img
                    src="/hoip_headless/assets/img/common/btn-up-arrw.png"
                    alt="scrollup"
                    loading="lazy"
                    width="62"
                    height="62"
                    className="img-fluid"
                />
            </div>
            <footer className="footer" id="footer">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <a href="/" className="footer__logo-link">
                            <img
                                src="/hoip_headless/assets/img/common/company_logo.png"
                                alt="hoip"
                                loading="lazy"
                                className="img-fluid"
                                width="49"
                                height="33"
                            />
                        </a>
                        <p className="footer__logo-copyright">©hoip inc.</p>
                    </div>
                    <div className="footer__end">
                        <div className="footer__category">
                            <Link to="/privacy" className="footer__category-link">個人情報保護方針</Link>
                            <Link to="/contact" className="footer__category-link">お問い合わせ</Link>
                        </div>
                        {/* Social icons omitted for brevity */}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;