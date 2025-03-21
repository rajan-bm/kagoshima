import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Toggle menu for mobile (below 992px)
    const toggleMenu = () => {
        if (window.innerWidth < 992) {
            setIsMenuOpen((prev) => !prev);
        }
    };
    // Handle resize to close menu on desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setIsMenuOpen(false);
            }
        };
        // Add resize listener
        window.addEventListener("resize", handleResize);
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update body class for no-scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isMenuOpen]);

    return (
        <header className="header" id="header">
            <div className="header__wrapper">
                <Link to="/" className="logo">
                    <img
                        src="/hoip_headless/assets/img/common/logo.png"
                        alt="logo"
                        width="175"
                        height="68"
                        loading="lazy"
                        className="img-fluid"
                    />
                </Link>
                <button
                    id="hamburger"
                    className={`hamburger ${isMenuOpen ? "is-open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`header__box ${isMenuOpen ? "is-open" : ""}`}>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                    オンラインショップ
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                    法人向けサービス
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/column/" onClick={() => setIsMenuOpen(false)}>
                                    お役立ち情報
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                    会社概要
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/contact/" onClick={() => setIsMenuOpen(false)}>
                                    お問い合わせ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <Link to="#" className="buttons__link" onClick={() => setIsMenuOpen(false)}>
                            <img src="/hoip_headless/assets/img/common/shop-black.png" alt="Contact" width="24" height="30" loading="lazy" className="img-fluid norm" />
                            <p>Online shop</p>
                        </Link>
                        <Link to="/contact/" className="buttons__link" onClick={() => setIsMenuOpen(false)}>
                            <img src="/hoip_headless/assets/img/common/mail-black.png" alt="Contact" width="31" height="23" loading="lazy" className="img-fluid norm" />
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div className="social">
                        <Link to="#" target="_blank" className="social__link" onClick={() => setIsMenuOpen(false)}>
                            <img
                                src="/hoip_headless/assets/img/common/icon_twitter.svg"
                                alt="X"
                                loading="lazy"
                                width="23"
                                height="22"
                                className="img-fluid"
                            />
                        </Link>
                        <Link to="#" target="_blank" className="social__link" onClick={() => setIsMenuOpen(false)}>
                            <img
                                src="/hoip_headless/assets/img/common/icon_instagram.svg"
                                alt="INSTAGRAM"
                                loading="lazy"
                                width="25"
                                height="25"
                                className="img-fluid"
                            />
                        </Link>
                        <Link to="#" target="_blank" className="social__link line" onClick={() => setIsMenuOpen(false)}>
                            <div className="line-icon">
                                <img
                                    src="/hoip_headless/assets/img/common/icon__line.svg"
                                    alt="LINE"
                                    loading="lazy"
                                    width="15"
                                    height="15"
                                    className="img-fluid"
                                />
                            </div>
                            <p className="line-text">友だち追加</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;