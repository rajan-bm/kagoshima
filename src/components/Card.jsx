import React from "react";
import { Link } from "react-router-dom";

function Card({ title, image, date, description, slug, categoryName }) {
    return (
        <div className="ofukuwake__col">
            <span className="ofukuwake__col-title">{categoryName}</span>
            <Link to={`/category_detail/${slug}`}>
                <img
                    src={image}
                    alt={title.replace(/<[^>]+>/g, "")} // Strip HTML for alt text
                    width="100%"
                    height="203"
                    className="img-fluid"
                    loading="lazy"
                />
            </Link>
            <div className="ofukuwake__content">
                <p className="kagoshima__text padding" dangerouslySetInnerHTML={{ __html: title }} />
                <span className="ofukuwake__date">{date}</span>
                <p className="kagoshima__text">{description}</p>
                <Link to={`/category_detail/${slug}`} className="ofukuwake__btn">
                    つづきを読む
                </Link>
            </div>
        </div>
    );
}

export default Card;