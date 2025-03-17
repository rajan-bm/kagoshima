import { memo } from "react"; // Add memo to prevent unnecessary re-renders

function CategoryName({ categoryId, name }) {
    return <CategoryTitle name={name} />;
}

function CategoryTitle({ name }) {
    return (
        <h3 className="category__intro-heading" style={{ marginRight: "10px" }}>
            {name}
        </h3>
    );
}

export default memo(CategoryName); // Memoize to avoid re-renders unless props change