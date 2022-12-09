// THIRD IMPORT
import { Fragment } from 'react';

// PROJECT IMPORT
import Slider from 'pages/Template/Home/Part1/MainHome/Slider';
import AboutUs from 'pages/Template/Home/Part1/MainHome/AboutUs';
import Project from 'pages/Template/Home/Part1/MainHome/Project';

// STYLE IMPORT
import 'static/Template/scss/Home/Part1/MainHome/index.scss';

const Index = () => {
  return (
    <Fragment>
      <Slider />
      <AboutUs />
      <Project />
    </Fragment>
  );
};

export default Index;
