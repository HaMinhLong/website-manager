// THIRD IMPORT
import { Grid } from '@mui/material';

// ICONS IMPORT
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import LaptopIcon from '@mui/icons-material/Laptop';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Index = () => {
  return (
    <section className="service__home" id="service__home">
      <div className="service__container container">
        <h2 className="title__home sz-60 text-uppercase" data-aos="fade-right">
          Services <br />& PORTFOLIO
        </h2>
        <Grid className="services" container spacing={'40px'} sx={{ mt: '30px' }}>
          <Grid className="service" item xs={12} md={6} lg={4} data-aos="fade-up">
            <div className="icon">
              <BrandingWatermarkIcon />
            </div>
            <div className="content">
              <p className="title">Brand Identity</p>
              <p className="description">There live the blind texts. Separated they live in Bookmarksgrove right </p>
            </div>
          </Grid>

          <Grid className="service" item xs={12} md={6} lg={4} data-aos="fade-up">
            <div className="icon">
              <LoyaltyIcon />
            </div>
            <div className="content">
              <p className="title">Marketing</p>
              <p className="description">Far far away, behind the word mountains, far from the countries Vokalia </p>
            </div>
          </Grid>

          <Grid className="service" item xs={12} md={6} lg={4} data-aos="fade-up">
            <div className="icon">
              <DirectionsTransitIcon />
            </div>
            <div className="content">
              <p className="title">Strategy</p>
              <p className="description">A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
          </Grid>

          <Grid className="service" item xs={12} md={6} lg={4} data-aos="fade-up">
            <div className="icon">
              <LaptopIcon />
            </div>
            <div className="content">
              <p className="title">Web Design</p>
              <p className="description">It is a paradisematic country, in which roasted parts of sentences </p>
            </div>
          </Grid>

          <Grid className="service" item xs={12} md={6} lg={4} data-aos="fade-up">
            <div className="icon">
              <MobileFriendlyIcon />
            </div>
            <div className="content">
              <p className="title">UI & UX</p>
              <p className="description">Fly into your mouth even the all-powerful Pointing on that </p>
            </div>
          </Grid>

          <Grid className="service" item xs={12} md={6} lg={4} data-aos="fade-up">
            <div className="icon">
              <DesignServicesIcon />
            </div>
            <div className="content">
              <p className="title">Graphic Design</p>
              <p className="description">Has no control about the blind texts it is an almost unorthographic life </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Index;
