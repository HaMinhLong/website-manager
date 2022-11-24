// IMAGES IMPORT
import BackgroundSlider from 'static/Foodie/images/Home/background-slider.jpg';
import AppleImage from 'static/Foodie/images/Home/apple.png';

const Index = () => {
  return (
    <section className="slider__home">
      <img src={BackgroundSlider} alt="slider home" />
      <div className="content">
        <div className="image__text--box">
          <img src={AppleImage} alt="apple icon" />
          <p>Premium</p>
        </div>
        <p>Quality</p>
        <h1>Restaurant</h1>
        <h1>& Dishes</h1>
      </div>
      <div className="mouse__down">
        <div></div>
      </div>
    </section>
  );
};

export default Index;
