// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';

// PROJECT IMPORT
import Header from 'layout/Template/Header';
// import Footer from 'layout/Template/Footer';

import MainHome from 'pages/Template/Home/Part1/MainHome';
import Simple from 'pages/Template/Home/Part2/Simple';
import AboutMe from 'pages/Template/Pages/About/AboutMe';

// STATIC IMPORT
import 'static/Template/scss/main.scss';
import 'static/Template/scss/responsive.scss';

const MewShop = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home/part-2/simple" element={<Simple />} />
        <Route path="/pages/about/about-me" element={<AboutMe />} />
      </Routes>
      {/* <Footer /> */}

      <BackTop />
    </>
  );
};

export default MewShop;
