import { memo } from "react"; // Optional: Add memo to prevent unnecessary re-renders

function SidebarShop() {
    return (
        <div className="buttons">
            <a href="#" className="buttons__link">
                <span>
                    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.38 52.06" width="35" height="43">
                        <path style={{ fill: "#231f20" }}
                            d="M37.44,52.06H3.4c-.87.01-1.82-.38-2.47-1.07-.68-.73-1.01-1.73-.91-2.74L3.37,13.44c.17-1.78,1.61-3.12,3.34-3.12h26.65c1.72,0,3.15,1.33,3.34,3.09l3.66,34.21c.14,1.3-.26,2.69-1,3.54-.52.58-1.17.9-1.9.92h0ZM3.38,50.06h34.04c.1,0,.25-.03.43-.24.38-.43.59-1.27.52-2l-3.66-34.21c-.08-.74-.66-1.3-1.35-1.3H6.71c-.7,0-1.28.57-1.35,1.32l-3.35,34.81c-.04.44.1.87.39,1.19.26.28.63.45.98.43Z" />
                        <path style={{ fill: "#231f20" }}
                            d="M10.92,16.91c0-.42-.16-10.34,4.15-14.77C16.44.73,18.11.01,20.02,0c1.9.03,3.58.68,4.96,2.06,4.42,4.38,4.47,14.41,4.47,14.84h-2c0-.1-.05-9.62-3.88-13.42-1.01-1-2.16-1.47-3.54-1.47-1.38.01-2.54.51-3.53,1.53-3.73,3.84-3.59,13.25-3.59,13.34l-2,.04Z" />
                        <g>
                            <rect style={{ fill: "#231f20" }} x="10.92" y="18.16" width="2" height="1.51" />
                            <rect style={{ fill: "#231f20" }} x="27.57" y="18.16" width="2" height="1.51" />
                        </g>
                    </svg>
                </span>
                <p className="buttons__link-text">Online shop</p>
            </a>
            <a href="/hoip_headless/contact/" className="buttons__link">
                <span>
                    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.08 39.47" width="44" height="33">
                        <g id="Layer_1-2" data-name="Layer_1">
                            <path style={{ fill: "#231f20" }}
                                d="M51.08,0H3C1.35,0,0,1.35,0,3v33.47c0,1.66,1.35,3,3,3h48.08c1.66,0,3-1.34,3-3V3c0-1.65-1.34-3-3-3ZM52.08,36.47c0,.55-.44,1-1,1H3c-.55,0-1-.45-1-1V10.2l23.32,11.68c.8.4,1.68.6,2.56.6s1.82-.22,2.64-.65l21.56-11.26v25.9ZM52.08,8.29l-.6.34-21.88,11.43c-1.06.55-2.32.56-3.39.03L3.24,8.59l-1.24-.59V3c0-.55.45-1,1-1h48.08c.56,0,1,.45,1,1v5.29Z" />
                        </g>
                    </svg>
                </span>
                <p className="buttons__link-text">Contact</p>
            </a>
        </div>
    )
}

export default memo(SidebarShop);