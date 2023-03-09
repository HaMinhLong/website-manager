// THIRD IMPORT
import { lazy } from 'react';
import Loadable from 'components/Loadable';

// PROJECT IMPORT

const Banner = Loadable(lazy(() => import('pages/MewShop/Home/Banner')));
const FlashSale = Loadable(lazy(() => import('pages/MewShop/Home/FlashSale')));
const ShirtHome = Loadable(lazy(() => import('pages/MewShop/Home/ShirtHome')));
const ShortHome = Loadable(lazy(() => import('pages/MewShop/Home/ShortHome')));
const TShirtHome = Loadable(lazy(() => import('pages/MewShop/Home/TShirtHome')));
const ArticleHome = Loadable(lazy(() => import('pages/MewShop/Home/ArticleHome')));
const BrandHome = Loadable(lazy(() => import('pages/MewShop/Home/BrandHome')));

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSale />
      <TShirtHome />
      <ShortHome />
      <ShirtHome />
      <ArticleHome />
      <BrandHome />
    </>
  );
};

export default Home;
