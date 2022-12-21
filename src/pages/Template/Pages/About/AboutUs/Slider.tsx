// PROJECT IMPORT

// IMAGES IMPORT
import SliderImage from 'static/Template/images/Pages/About/AboutUs/slider.jpg';

const Slider = () => {
  return (
    <section className="slider__about--us">
      <img className="background" src={SliderImage} alt="slider" />
      <div className="content">
        <p className="title--small">ABOUT OUR ARCHITECTS</p>
        <h1 className="title--large">We are based on collective work and shared knowledge</h1>
      </div>
    </section>
  );
};

export default Slider;
