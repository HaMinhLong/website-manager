// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';
import { lazy } from 'react';
import Loadable from 'components/Loadable';

// PROJECT IMPORT

// STATIC IMPORT
import 'static/MewShop/css/main.css';
import 'static/MewShop/css/responsive.css';
import 'static/MewShop/css/styles.css';

const Header = Loadable(lazy(() => import('layout/MewShop/Header')));
const Footer = Loadable(lazy(() => import('layout/MewShop/Footer')));

const Home = Loadable(lazy(() => import('pages/MewShop/Home')));
const Introduce = Loadable(lazy(() => import('pages/MewShop/Introduce')));
const ArticleDetail = Loadable(lazy(() => import('pages/MewShop/ArticleDetail')));
const ProductDetail = Loadable(lazy(() => import('pages/MewShop/ProductDetail')));
const Products = Loadable(lazy(() => import('pages/MewShop/Products')));
const Article = Loadable(lazy(() => import('pages/MewShop/Article')));
const Location = Loadable(lazy(() => import('pages/MewShop/Location')));
const Contact = Loadable(lazy(() => import('pages/MewShop/Contact')));
const Cart = Loadable(lazy(() => import('pages/MewShop/Cart')));
const Checkout = Loadable(lazy(() => import('pages/MewShop/Checkout')));
const SearchProduct = Loadable(lazy(() => import('pages/MewShop/SearchProduct')));

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
        <Route path="/search" element={<SearchProduct />} />
      </Routes>
      <Footer></Footer>
      <BackTop />
    </>
  );
};

export default MewShop;
