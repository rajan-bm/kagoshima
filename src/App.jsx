import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import Column from "./pages/Column";
import ColumnCategory from "./pages/ColumnCategory";
import ColumnDetail from "./pages/ColumnDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
    return (
        <DataProvider>
            <Router basename="/hoip_headless/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/column" element={<Column />} />
                    <Route path="/column/:categorySlug" element={<ColumnCategory />} />
                    <Route path="/column/:categorySlug/:postSlug" element={<ColumnDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </Router>
        </DataProvider>
    );
}

export default App;