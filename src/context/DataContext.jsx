import { createContext, useState, useCallback, useEffect } from "react";
import { fetchContent } from "@/api/wordpressApi";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [relposts, setRelposts] = useState([]);
    const [pages, setPages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);


    // Function to load posts (blog articles)
    const loadPosts = useCallback(async (params = {}) => {
        setLoading(true);
        try {
            const data = await fetchContent("posts", params);
            setPosts(data);
        } catch (error) {
            console.error("Error loading posts:", error);
            setPosts([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Function to load related posts
    const loadRelatedPosts = useCallback(async (params = {}) => {
        setLoading(true);
        try {
            const data = await fetchContent("posts", params);
            setRelposts(data);
        } catch (error) {
            console.error("Error loading related posts:", error);
            setRelposts([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchCategories = useCallback(async (params = {}) => {
        setLoading(true);
        try {
            const data = await fetchContent("categories", params);
            setCategories(data);
            return data;
        } catch (error) {
            console.error("Error loading categories:", error.message, error.stack);
            setCategories([]);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchRelatedPosts = useCallback(async (categoryIds, numberOfPosts, currentPostId) => {
        setLoading(true);
        try {
            const data = await fetchContent("posts", {
                categories: categoryIds, // Accepts "5,6,7" for multiple categories
                per_page: numberOfPosts + 1,
                exclude: currentPostId,
                _embed: true,
            });
            return data.filter((post) => post.id !== currentPostId).slice(0, numberOfPosts);
        } catch (error) {
            console.error("Error loading related posts:", error);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    // Pre-fetch categories on mount
    useEffect(() => {
        fetchCategories(); // Fetch all categories once when the app starts
    }, [fetchCategories]);

    // Function to load pages (static pages)
    const loadPages = useCallback(async (params = {}) => {
        setLoading(true);
        try {
            const data = await fetchContent("pages", params);
            setPages(data);
        } catch (error) {
            console.error("Error loading pages:", error);
            setPages([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // fetch post by slug    
    const fetchPostBySlug = useCallback(async (slug) => {
        setLoading(true);
        try {
            const data = await fetchContent("posts", { slug });
            setLoading(false); // Add this
            return data[0]; // Return the post object
        } catch (error) {
            console.error("Error loading posts:", error);
            setLoading(false); // Add this
            return undefined;
        }
    }, []);

    return (
        <DataContext.Provider value={{
            posts,
            relposts,
            pages,
            categories,
            loading,
            loadPosts,
            loadRelatedPosts,
            loadPages,
            fetchCategories,
            fetchPostBySlug,
            fetchRelatedPosts,
        }}>
            {children}
        </DataContext.Provider>
    );
};

// import { createContext, useState, useCallback, useEffect } from "react";
// import { fetchContent } from "@/api/wordpressApi";

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//     const [posts, setPosts] = useState([]);
//     const [relposts, setRelposts] = useState([]);
//     const [pages, setPages] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const loadPosts = useCallback(async (params = {}) => {
//         setLoading(true);
//         try {
//             const data = await fetchContent("posts", params);
//             console.log("Posts fetched from API:", data);
//             console.log("Number of posts fetched:", data.length);
//             setPosts(data);
//         } catch (error) {
//             console.error("Error loading posts:", error);
//             setPosts([]);
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     const fetchCategories = useCallback(async (params = {}) => {
//         setLoading(true);
//         try {
//             const data = await fetchContent("categories", params);
//             console.log("Categories fetched:", data);
//             setCategories(data);
//             return data;
//         } catch (error) {
//             console.error("Error loading categories:", error.message, error.stack);
//             setCategories([]);
//             return [];
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     // Pre-fetch categories on mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]);

//     return (
//         <DataContext.Provider
//             value={{
//                 posts,
//                 relposts,
//                 pages,
//                 categories,
//                 loading,
//                 loadPosts,
//                 // Include other functions if needed
//             }}
//         >
//             {children}
//         </DataContext.Provider>
//     );
// };

// export default DataProvider;