// THIRD IMPORT
import React from 'react';

// PROJECT IMPORT
import Banner from 'pages/MewShop/Home/Banner';
import FlashSale from 'pages/MewShop/Home/FlashSale';
import ShirtHome from 'pages/MewShop/Home/ShirtHome';
import ShortHome from 'pages/MewShop/Home/ShortHome';
import TShirtHome from 'pages/MewShop/Home/TShirtHome';
import ArticleHome from 'pages/MewShop/Home/ArticleHome';
import BrandHome from 'pages/MewShop/Home/BrandHome';

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <FlashSale />
      <TShirtHome />
      <ShortHome />
      <ShirtHome />
      <ArticleHome />
      <BrandHome />
    </React.Fragment>
  );
};

export default Home;
