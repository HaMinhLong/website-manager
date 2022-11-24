// THIRD IMPORT
import { Grid } from '@mui/material';

// IMAGES IMPORT
import AboutOne from 'static/Foodie/images/Home/about-1.png';
import AboutTwo from 'static/Foodie/images/Home/about-2.png';
import AboutThree from 'static/Foodie/images/Home/about-3.png';

const Index = () => {
  return (
    <section id="about">
      <div className="about__home container">
        <div className="title__container">
          <h2 className="title__home">What we can offer</h2>
          <div>
            <div className="divider"></div>
            <p className="sub__title">from our hearts</p>
            <div className="divider"></div>
          </div>
        </div>
        <Grid container spacing="30px">
          <Grid item xs={12} lg={4} className="about">
            <div className="image__box">
              <img src={AboutOne} alt="about" />
            </div>
            <div className="content">
              <em className="title">
                <strong>Always</strong> Fresh
              </em>
              <p className="description">
                Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} lg={4} className="about">
            <div className="image__box">
              <img src={AboutTwo} alt="about" />
            </div>
            <div className="content">
              <em className="title">
                <strong>Always</strong> Fresh
              </em>
              <p className="description">
                Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} lg={4} className="about">
            <div className="image__box">
              <img src={AboutThree} alt="about" />
            </div>
            <div className="content">
              <em className="title">
                <strong>Always</strong> Fresh
              </em>
              <p className="description">
                Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend. Etiam vel luctus nibh. Donec eu volutpat.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Index;
