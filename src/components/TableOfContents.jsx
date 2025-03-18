import { memo } from "react";

function TableOfContents({ toc = [] }) {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 30;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
            // element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        toc.length > 0 && (
            <div className="category__intro-text" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {toc.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="kagoshima__text"
                        onClick={(e) => handleClick(e, item.id)}
                        style={{ textDecoration: "none", transition: "all 0.2s ease" }}
                        onMouseEnter={(e) => {
                            e.target.style.opacity = "0.7";
                            e.target.style.textDecoration = "underline";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.opacity = "1";
                            e.target.style.textDecoration = "none";
                        }}
                    >
                        {item.text}
                    </a>
                ))}
            </div>
        )
    );
}

export default memo(TableOfContents);