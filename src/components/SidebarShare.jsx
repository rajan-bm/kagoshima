function SidebarShare() {
    return (
        <div className="category__sidebar-share">
            <p className="kagoshima__text">シェアする</p>
            <div className="social">
                <a href="#" className="social__link" target="_blank">
                    <img
                        src="/hoip_headless/assets/img/common/icon_twitter.svg"
                        alt="X"
                        loading="lazy"
                        width="23"
                        height="22"
                        className="img-fluid"
                    />
                </a>
                <a href="#" className="social__link" target="_blank">
                    <img
                        src="/hoip_headless/assets/img/common/icon_instagram.svg"
                        alt="INSTAGRAM"
                        loading="lazy"
                        width="25"
                        height="25"
                        className="img-fluid"
                    />
                </a>
                <a href="#" className="social__link line" target="_blank">
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
                <a href="#" className="social__link" target="_blank">
                    <svg
                        height="512px"
                        id="Layer_1"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="512px"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g>
                            <polygon points="144,416 144,400 144,112 112,112 112,448 352,448 352,416 160,416 " />
                            <g>
                                <path d="M325.3,64H160v48v288h192h48V139L325.3,64z M368,176h-80V96h16v64h64V176z" />
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SidebarShare;