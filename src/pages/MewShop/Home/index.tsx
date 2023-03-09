// THIRD IMPORT
import { lazy, useEffect, useState } from 'react';
import Loadable from 'components/Loadable';

// PROJECT IMPORT

const Banner = Loadable(lazy(() => import('pages/MewShop/Home/Banner')));
const FlashSale = Loadable(lazy(() => import('pages/MewShop/Home/FlashSale')));
const ShirtHome = Loadable(lazy(() => import('pages/MewShop/Home/ShirtHome')));
const ShortHome = Loadable(lazy(() => import('pages/MewShop/Home/ShortHome')));
const TShirtHome = Loadable(lazy(() => import('pages/MewShop/Home/TShirtHome')));
const ArticleHome = Loadable(lazy(() => import('pages/MewShop/Home/ArticleHome')));
const BrandHome = Loadable(lazy(() => import('pages/MewShop/Home/BrandHome')));
const Loading = Loadable(lazy(() => import('components/Extended/Loading')));

const Home = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <section>
      <Banner />
      <FlashSale />
      <TShirtHome />
      <ShortHome />
      <ShirtHome />
      <ArticleHome />
      <BrandHome />
      <Loading loading={loading} />
    </section>
  );
};

export default Home;
