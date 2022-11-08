// THIRD IMPORT
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BackTop } from "antd";

// PROJECT IMPORT
import Header from "layout/Header";
import Footer from "layout/Footer";

import Home from "pages/Home";
import Introduce from "pages/Introduce";
import ArticleDetail from "pages/ArticleDetail";
import Products from "pages/Products";
import Article from "pages/Article";
import Location from "pages/Location";
import Contact from "pages/Contact";
import ProductDetail from "pages/ProductDetail";
import Cart from "pages/Cart";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/article/:url" element={<ArticleDetail />} />
        <Route path="/articles/:url" element={<Article />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/collection/:collection" element={<Products />} />
        <Route path="/products/:url" element={<Products />} />
        <Route path="/products/:url/:urlChild" element={<Products />} />
        <Route path="/:url/:urlProduct" element={<ProductDetail />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
      <BackTop />
    </Router>
  );
};

export default App;
