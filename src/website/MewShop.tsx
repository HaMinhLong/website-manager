// THIRD IMPORT
import { Route, Routes } from "react-router-dom";
import { BackTop } from "antd";

// PROJECT IMPORT
import Header from "layout/MewShop/Header";
import Footer from "layout/MewShop/Footer";

import Home from "pages/MewShop/Home";
import Introduce from "pages/MewShop/Introduce";
import ArticleDetail from "pages/MewShop/ArticleDetail";
import Products from "pages/MewShop/Products";
import Article from "pages/MewShop/Article";
import Location from "pages/MewShop/Location";
import Contact from "pages/MewShop/Contact";
import ProductDetail from "pages/MewShop/ProductDetail";
import Cart from "pages/MewShop/Cart";
import Checkout from "pages/MewShop/Checkout";

const MewShop = () => {
  return (
    <>
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
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer></Footer>
      <BackTop />
    </>
  );
};

export default MewShop;
