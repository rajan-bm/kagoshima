import { useState } from "react";

function SidebarShare() {
    const [copied, setCopied] = useState(false);
    const currentUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent("Check this out!");

    const handleCopyLink = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="category__sidebar-share">
            <p className="kagoshima__text">シェアする</p>
            <div className="social" style={{ position: "relative" }}>
                {/* Twitter Share */}
                <a
                    href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`}
                    className="social__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/hoip_headless/assets/img/common/icon_twitter.svg"
                        alt="X"
                        loading="lazy"
                        width="23"
                        height="22"
                        className="img-fluid"
                    />
                </a>

                {/* Instagram - No direct share link, so linking to Instagram */}
                <a
                    href="https://www.instagram.com"
                    className="social__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/hoip_headless/assets/img/common/icon_instagram.svg"
                        alt="INSTAGRAM"
                        loading="lazy"
                        width="25"
                        height="25"
                        className="img-fluid"
                    />
                </a>

                {/* LINE Share */}
                <a
                    href={`https://social-plugins.line.me/lineit/share?url=${currentUrl}`}
                    className="social__link line"
                    target="_blank"
                    rel="noopener noreferrer"
                >
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
                </a>

                {/* Copy Link */}
                <a href="#" className="social__link" onClick={handleCopyLink}>
                    <svg
                        height="24px"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <polygon points="144,416 144,400 144,112 112,112 112,448 352,448 352,416 160,416 " />
                            <path d="M325.3,64H160v48v288h192h48V139L325.3,64z M368,176h-80V96h16v64h64V176z" />
                        </g>
                    </svg>
                </a>

                {/* Copied Message */}
                {copied && (
                    <span style={{ position: "absolute", bottom: "-15px", color: "green", marginLeft: "10px" }}>
                        Copied!
                    </span>
                )}
            </div>
        </div>
    );
}

export default SidebarShare;
