// THIRD IMPORT
import React, { useState } from "react";
import { Link } from "react-router-dom";

// PROJECT IMPORT
import Banner from "pages/Home/Banner";
import FlashSale from "pages/Home/FlashSale";
import ShirtHome from "pages/Home/ShirtHome";
import ShortHome from "pages/Home/ShortHome";
import TShirtHome from "pages/Home/TShirtHome";
import ArticleHome from "pages/Home/ArticleHome";
import BrandHome from "pages/Home/BrandHome";

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
