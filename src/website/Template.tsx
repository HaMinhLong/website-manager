// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';

// PROJECT IMPORT
// import Header from 'layout/Template/Header';
// import Footer from 'layout/Template/Footer';

import Part1 from 'pages/Template/Home/Part1';
import Part2 from 'pages/Template/Home/Part2';

// STATIC IMPORT
import 'static/Template/scss/main.scss';
// import 'static/Template/css/responsive.scss';

const MewShop = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Part1 />} />
        <Route path="/home/part-2" element={<Part2 />} />
      </Routes>
      {/* <Footer /> */}

      <BackTop />
    </>
  );
};

export default MewShop;
