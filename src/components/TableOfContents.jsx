import { memo } from "react";

function TableOfContents({ toc = [] }) {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    console.log("TableOfContents rendering with toc:", toc);

    return (
        toc.length > 0 && (
            <div className="category__intro-text">
                {toc.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="kagoshima__text"
                        onClick={(e) => handleClick(e, item.id)}
                    >
                        {item.text}
                    </a>
                ))}
            </div>
        )
    );
}

export default memo(TableOfContents);