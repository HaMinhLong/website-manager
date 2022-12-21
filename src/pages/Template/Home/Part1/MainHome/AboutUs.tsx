// THIRD IMPORT
import { Grid } from '@mui/material';

// IMAGES IMPORT
import BgAboutUs from 'static/Template/images/Home/Part1/MainHome/bg-aboutUs-home.jpg';

const AboutUs = () => {
  return (
    <section className="about__home--main container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={4}>
          <div className="image__box">
            <img src={BgAboutUs} alt="bg about us" className="background" />
            <div className="number__box">
              <p className="number">14</p>
              <p className="description">years of experience</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <div className="content">
            <p className="title__section--small">about us</p>
            <h2 className="title__section--large">Break out of your routine with a global perspective.</h2>
            <p className="description">
              Based on collective work and shared knowledge, Architecture-Studio aims to favour dialogue and debate, to transform individual
              knowledge into increased creative potential.
            </p>
            <p className="description">
              Our Studio is a architecture practice based in Prague, Chech and Venice. Today, it includes 150 architects, urban planners,
              landscape and interior designers of 25 different nationalities. The company principle of Architecture-Studio is the collective
              conception. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort,
              shred knowledge.
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutUs;
