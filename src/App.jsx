import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext"; // ✅ Ensure correct import
import Home from "./pages/Home";
import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
    return (
        <DataProvider>  {/* ✅ Wrap entire Router with DataProvider */}
            <Router basename="/hoip_headless/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="category/" element={<Category />} /> */}
                    <Route path="/category" element={<Category />} />
                    <Route path="/category/:slug" element={<Category />} /> {/* Same component, slug optional */}
                    <Route path="category_detail/:slug" element={<CategoryDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<Privacy />} />
                </Routes>
            </Router>
        </DataProvider>
    );
}

export default App;