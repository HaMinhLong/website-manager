import React from 'react';

// IMAGES IMPORT
import SliderImage from 'static/Template/images/Home/Part1/MainHome/slider-main-home.jpg';

const Slider = () => {
  return (
    <section className="slider__home--main">
      <img src={SliderImage} alt="slider home" className="background" />
      <div className="content">
        <p className="title--small">vorohta, ukraine</p>
        <h1 className="title--large">Awesome Design for the Verokhta Hub</h1>
        <p className="description">
          The main objective of the project – transformation of Vorokhta City in innovative <br /> SMART CITY (village) and tourist center.
        </p>
        <button className="button__custom--style1">Explore it</button>
      </div>
    </section>
  );
};

export default Slider;
