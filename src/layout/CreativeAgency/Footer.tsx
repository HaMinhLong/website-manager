// THIRD IMPORT
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// ICONS IMPORT
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

// IMAGES IMPORT
import ImageFooterOne from 'static/CreativeAgency/images/Footer/image-footer-1.jpg';
import ImageFooterTwo from 'static/CreativeAgency/images/Footer/image-footer-2.jpg';
import ImageFooterThree from 'static/CreativeAgency/images/Footer/image-footer-3.jpg';
import ImageFooterFour from 'static/CreativeAgency/images/Footer/image-footer-4.jpg';
import ImageFooterFive from 'static/CreativeAgency/images/Footer/image-footer-5.jpg';
import ImageFooterSix from 'static/CreativeAgency/images/Footer/image-footer-6.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="footer__box container">
        <h2 className="title__footer">follow us</h2>
        <p className="username">#jevelincreative</p>
        <Grid container spacing="30px" sx={{ mt: '30px' }}>
          <Grid item xs={12} md={6} lg={3} data-aos="fade-up">
            <p className="title__box--footer">Office</p>
            <p className="description">
              Office San Diego — 845 15th Street, Suite 906 San Diego, CA 92120 Mountain View — 1398 Villa St Mountain View, CA 96841
            </p>
          </Grid>
          <Grid item xs={12} md={6} lg={3} data-aos="fade-up">
            <p className="title__box--footer">Start a conversation</p>
            <p className="description">hi@creativeagency.com +1.858.755.6922 </p>
          </Grid>
          <Grid item xs={12} md={6} lg={3} data-aos="fade-up">
            <p className="title__box--footer">Social</p>
            <Grid container spacing="20px">
              <Grid item xs={3}>
                <Link to="/">
                  <TwitterIcon sx={{ color: '#fff' }} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/">
                  <InstagramIcon sx={{ color: '#fff' }} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/">
                  <FacebookIcon sx={{ color: '#fff' }} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/">
                  <YouTubeIcon sx={{ color: '#fff' }} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={3} className="latest__project">
            <p className="title__box--footer" data-aos="zoom-in">
              Latest Projects
            </p>
            <Grid container spacing="10px">
              <Grid item xs={4} data-aos="zoom-in">
                <img src={ImageFooterOne} alt="project one" />
              </Grid>
              <Grid item xs={4} data-aos="zoom-in">
                <img src={ImageFooterTwo} alt="project one" />
              </Grid>
              <Grid item xs={4} data-aos="zoom-in">
                <img src={ImageFooterThree} alt="project one" />
              </Grid>
              <Grid item xs={4} data-aos="zoom-in">
                <img src={ImageFooterFour} alt="project one" />
              </Grid>
              <Grid item xs={4} data-aos="zoom-in">
                <img src={ImageFooterFive} alt="project one" />
              </Grid>
              <Grid item xs={4} data-aos="zoom-in">
                <img src={ImageFooterSix} alt="project one" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="copyright">
        <div className="flex__center">
          <p>Copyright © 2017 JevelinTheme - Theme by Shufflehound</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
