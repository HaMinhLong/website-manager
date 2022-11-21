// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';

// PROJECT IMPORT
import Header from 'layout/CreativeAgency/Header';
import Footer from 'layout/CreativeAgency/Footer';

import Home from 'pages/CreativeAgency/Home';

// STATIC IMPORT
import 'static/CreativeAgency/css/main.scss';
import 'static/CreativeAgency/css/responsive.scss';

const MewShop = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
      <BackTop />
    </>
  );
};

export default MewShop;
