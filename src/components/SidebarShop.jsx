import { memo } from "react"; // Optional: Add memo to prevent unnecessary re-renders

function SidebarShop() {
    return (
        <div className="buttons">
            <a href="#" className="buttons__link">
                <img src="/hoip_headless/assets/img/common/shop-black.png" alt="Contact" width="35" height="43" loading="lazy" className="img-fluid norm" />
                <p className="buttons__link-text">Online shop</p>
            </a>
            <a href="/hoip_headless/contact/" className="buttons__link">
                <img src="/hoip_headless/assets/img/common/mail-black.png" alt="Contact" width="44" height="33" loading="lazy" className="img-fluid norm" />
                <p className="buttons__link-text">Contact</p>
            </a>
        </div>
    )
}

export default memo(SidebarShop);