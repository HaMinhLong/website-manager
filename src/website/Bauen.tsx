// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';

// PROJECT IMPORT
// import Header from 'layout/Bauen/Header';
// import Footer from 'layout/Bauen/Footer';

import Home from 'pages/Bauen/Home';

// STATIC IMPORT
import 'static/Bauen/scss/main.scss';
// import 'static/Bauen/css/responsive.scss';

const MewShop = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}

      <BackTop />
    </>
  );
};

export default MewShop;
