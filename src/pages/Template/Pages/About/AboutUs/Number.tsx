// THIRD IMPORT
import { Grid } from '@mui/material';

// IMAGES IMPORT
import BgAboutUs from 'static/Template/images/Pages/About/AboutUs/number-bg.jpg';

const Number = () => {
  return (
    <section className="number__about--us container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={5}>
          <div className="image__box">
            <img src={BgAboutUs} alt="bg about us" className="background" />
            <div className="number__container">
              <div className="number__box">
                <p className="number">14</p>
                <p className="description">years of experience</p>
              </div>
              <div className="number__box">
                <p className="number">14</p>
                <p className="description">years of experience</p>
              </div>
              <div className="number__box">
                <p className="number">14</p>
                <p className="description">years of experience</p>
              </div>
              <div className="number__box">
                <p className="number">14</p>
                <p className="description">years of experience</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <div className="content">
            <p className="title__section--small">NUMBERS</p>
            <h2 className="title__section--large">Make with love all what we do.</h2>
            <p className="description">
              Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate
              them within our innovations. All our projects incorporate a unique artistic image and functional solutions.
            </p>
            <p className="description">
              Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality through design. So we wait
              to hear your wishes.
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Number;
