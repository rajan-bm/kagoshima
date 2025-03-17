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
                                <Link to="/category/" onClick={() => setIsMenuOpen(false)}>
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
                        <Link to="/" className="buttons__link" onClick={() => setIsMenuOpen(false)}>
                            <span>
                                <svg
                                    id="Layer_2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 40.38 52.06"
                                    width="24"
                                    height="30"
                                >
                                    <path
                                        className="cls-1"
                                        d="M37.44,52.06H3.4c-.87.01-1.82-.38-2.47-1.07-.68-.73-1.01-1.73-.91-2.74L3.37,13.44c.17-1.78,1.61-3.12,3.34-3.12h26.65c1.72,0,3.15,1.33,3.34,3.09l3.66,34.21c.14,1.3-.26,2.69-1,3.54-.52.58-1.17.9-1.9.92h0ZM3.38,50.06h34.04c.1,0,.25-.03.43-.24.38-.43.59-1.27.52-2l-3.66-34.21c-.08-.74-.66-1.3-1.35-1.3H6.71c-.7,0-1.28.57-1.35,1.32l-3.35,34.81c-.04.44.1.87.39,1.19.26.28.63.45.98.43Z"
                                    />
                                </svg>
                            </span>
                            <p>Online shop</p>
                        </Link>
                        <Link to="/contact/" className="buttons__link" onClick={() => setIsMenuOpen(false)}>
                            <span>
                                <svg
                                    id="Layer_2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 54.08 39.47"
                                    width="31"
                                    height="23"
                                >
                                    <path
                                        className="cls-1"
                                        d="M51.08,0H3C1.35,0,0,1.35,0,3v33.47c0,1.66,1.35,3,3,3h48.08c1.66,0,3-1.34,3-3V3c0-1.65-1.34-3-3-3ZM52.08,36.47c0,.55-.44,1-1,1H3c-.55,0-1-.45-1-1V10.2l23.32,11.68c.8.4,1.68.6,2.56.6s1.82-.22,2.64-.65l21.56-11.26v25.9ZM52.08,8.29l-.6.34-21.88,11.43c-1.06.55-2.32.56-3.39.03L3.24,8.59l-1.24-.59V3c0-.55.45-1,1-1h48.08c.56,0,1,.45,1,1v5.29Z"
                                    />
                                </svg>
                            </span>
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