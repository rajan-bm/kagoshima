import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ posttye, title }) => {
    console.log(posttye, title);
    
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="breadcrumb">
            <div className="breadcrumb__wrapper">
                <ul className="breadcrumb__list">
                    <li className="breadcrumb__item">
                        <Link to="/hoip_headless/" className="breadcrumb__link">お福分け青汁</Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        return (
                            <li key={index} className="breadcrumb__item">
                                <Link to={routeTo} className="breadcrumb__link">{decodeURIComponent(name)}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumb;