// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';

// PROJECT IMPORT
import Header from 'layout/DailySupplies/Header';
import Footer from 'layout/DailySupplies/Footer';
import Home from 'pages/DailySupplies/Home';

// STATIC IMPORT
import 'static/DailySupplies/css/main.scss';

const MewShop = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

      <BackTop />
    </>
  );
};

export default MewShop;
