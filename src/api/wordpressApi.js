import axios from "axios";

// ✅ Base WordPress API URL
const BASE_URL = "https://cms.aozora-test.info/neta/wp-json/wp/v2";

/**
 * Fetch data from WordPress API (Posts, Pages, Custom Post Types)
 * @param {string} type - The type of content ("posts", "pages", or custom post type)
 * @param {object} params - Additional query parameters (e.g., { per_page: 10 })
 * @returns {Promise<Array>} - Array of fetched content with featured images
 */
export const fetchContent = async (type = "posts", params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}/${type}`, {
            params: { ...params, _embed: true }, // ✅ Fetch embedded media
        });

        // ✅ Extract featured images
        return response.data.map((item) => ({
            ...item,
            featured_media_url: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-image.jpg",
        }));
    } catch (error) {
        console.error(`Error fetching ${type}:`, error.response?.data || error.message);
        return [];
    }
};


// import axios from "axios";

// const BASE_URL = "https://cms.aozora-test.info/neta/wp-json/wp/v2";

// export const fetchContent = async (type = "posts", params = {}) => {
//     try {
//         const url = `${BASE_URL}/${type}?${new URLSearchParams({ ...params, _embed: true })}`;
//         console.log(`Fetching ${type} from:`, url);
//         const response = await axios.get(url);
//         console.log(`Response for ${type}:`, response.data);

//         return response.data.map((item) => ({
//             ...item,
//             featured_media_url: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-image.jpg",
//         }));
//     } catch (error) {
//         console.error(`Error fetching ${type}:`, error.response?.data || error.message);
//         return [];
//     }
// };