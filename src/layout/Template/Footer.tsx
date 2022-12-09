// THIRD IMPORT
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
// PROJECT IMPORT

// iMAGES IMPORT
import LogoPage from 'static/Template/images/Header/logo-page.png';
import BgFooter from 'static/Template/images/Footer/bg-footer.jpg';

const Footer = () => {
  return (
    <footer>
      <img src={BgFooter} alt="bg footer" className="footer__bg" />
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={LogoPage} alt="logo page" />
            <p className="description">
              The company principle of Architecture-Studio is the collective conception. From the very beginning, the practice has believed
              in the virtues of exchange, crossing ideas, common effort, shared knowledge and enthusiasm.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <p className="title">GET IN TOUCH</p>
            <p className="address">+7 (885) 589 69 85</p>
            <p className="address">prague-architects@info.com</p>
            <p className="address">Litačka, Jungmannova 35/29, Nové Město,Czech Republic</p>
          </Grid>
        </Grid>

        <div className="divider"></div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <p className="copyright">PRAGUE (C) 2019 ALL RIGHTS RESERVED</p>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
            <div className="social">
              <FacebookIcon />
            </div>
            <div className="social">
              <TwitterIcon />
            </div>
            <div className="social">
              <YouTubeIcon />
            </div>
            <div className="social">
              <InstagramIcon />
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
