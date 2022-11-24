// THIRD IMPORT
import OwlCarousel from 'react-owl-carousel';

// IMAGES IMPORT
import Customer1 from 'static/Foodie/images/Home/customer-1.png';
import Customer2 from 'static/Foodie/images/Home/customer-2.png';

const Index = () => {
  return (
    <section className="customer__home container">
      <div className="title__container">
        <h2 className="title__home">Customer</h2>
        <div>
          <div className="divider"></div>
          <p className="sub__title">stories about us</p>
          <div className="divider"></div>
        </div>
      </div>
      <div className="customers">
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={10}
          dots
          autoplay
          loop
          touchDrag={true}
          responsive={{
            0: {
              items: 1,
              stagePadding: 0
            }
          }}
          key={`carousel_master`}
        >
          <div className="customer">
            <div className="image__box">
              <img src={Customer1} alt="customer" />
            </div>
            <div className="content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus pariatur quis ipsa vitae excepturi commodi
                cupiditate corrupti fugit corporis a architecto, odio quidem eius fuga tenetur iusto velit quam accusamus sunt harum quo
                vero impedit? Soluta, error nam. Fugit a quos tempore nulla placeat autem dignissimos quas hic ex asperiores!
              </p>
              <p className="name">Brandon</p>
              <p className="title">Woft</p>
            </div>
          </div>
          <div className="customer">
            <div className="image__box">
              <img src={Customer2} alt="customer" />
            </div>
            <div className="content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus pariatur quis ipsa vitae excepturi commodi
                cupiditate corrupti fugit corporis a architecto, odio quidem eius fuga tenetur iusto velit quam accusamus sunt harum quo
                vero impedit? Soluta, error nam. Fugit a quos tempore nulla placeat autem dignissimos quas hic ex asperiores!
              </p>
              <p className="name">Brandon</p>
              <p className="title">Woft</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Index;
