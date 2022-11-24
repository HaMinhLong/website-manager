// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';

// PROJECT IMPORT
import Header from 'layout/Foodie/Header';

import Home from 'pages/Foodie/Home';

// STATIC IMPORT
import 'static/Foodie/css/main.scss';
import 'static/Foodie/css/responsive.scss';

const MewShop = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BackTop />
    </>
  );
};

export default MewShop;
