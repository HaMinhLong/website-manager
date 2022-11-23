// THIRD IMPORT
import { Route, Routes } from 'react-router-dom';
import { BackTop } from 'antd';

// PROJECT IMPORT
import Header from 'layout/CreativeAgency/Header';
import Footer from 'layout/CreativeAgency/Footer';

import Home from 'pages/CreativeAgency/Home';
import TeamPage from 'pages/CreativeAgency/TeamPage';
import ProjectPage from 'pages/CreativeAgency/ProjectPage';
import ProjectDetail from 'pages/CreativeAgency/ProjectDetail';
import ContactPage from 'pages/CreativeAgency/ContactPage';

// STATIC IMPORT
import 'static/CreativeAgency/css/main.scss';
import 'static/CreativeAgency/css/responsive.scss';

const MewShop = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer></Footer>
      <BackTop />
    </>
  );
};

export default MewShop;
