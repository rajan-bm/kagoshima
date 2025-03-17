import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import { Link } from "react-router-dom";
import { memo } from "react"; // Optional: Add memo to prevent unnecessary re-renders

function CategorySidebar() {
    const { categories, loading } = useContext(DataContext);

    return (
        <div className="category__sidebar-list">
            {loading ? (
                <p>Loading categories...</p>
            ) : categories.length > 0 ? (
                categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/category/${cat.slug}`} // Link to category slug
                        className="category__sidebar-item"
                    >
                        {cat.name}
                    </Link>
                ))
            ) : (
                <p>カテゴリーがありません。</p>
            )}
        </div>
    );
}

export default memo(CategorySidebar); // Optional: Memoize to optimize