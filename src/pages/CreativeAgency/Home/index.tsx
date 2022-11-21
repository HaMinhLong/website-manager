// THIRD IMPORT
import { Fragment } from 'react';

// PROJECT IMPORT
import Banner from 'pages/CreativeAgency/Home/Banner';
import Service from 'pages/CreativeAgency/Home/Service';
import Project from 'pages/CreativeAgency/Home/Project';
import Achievement from 'pages/CreativeAgency/Home/Achievement';
import MasterCrew from 'pages/CreativeAgency/Home/MasterCrew';
import Team from 'pages/CreativeAgency/Home/Team';
import Brand from 'pages/CreativeAgency/Home/Brand';
import Subscribe from 'pages/CreativeAgency/Home/Subscribe';
import Contact from 'pages/CreativeAgency/Home/Contact';

const Index = () => {
  return (
    <Fragment>
      <Banner />
      <Service />
      <Project />
      <Achievement />
      <MasterCrew />
      <Team />
      <Brand />
      <Subscribe />
      <Contact />
    </Fragment>
  );
};

export default Index;
