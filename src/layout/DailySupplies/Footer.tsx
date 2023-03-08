// THIRD IMPORT
import { Grid, Box } from '@mui/material';

// ICONS IMPORT
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

// PROJECT IMPORT
import 'static/DailySupplies/css/Footer.scss';

// IMAGES IMPORT
import LogoWhite from 'static/DailySupplies/images/logo-white.svg';

const Index = () => {
  return (
    <footer>
      <div className="container">
        <Grid container spacing={{ xs: 3, lg: 10 }}>
          <Grid item xs={12} md={12} lg={5}>
            <div className="image__box">
              <img src={LogoWhite} alt="logo footer" />
            </div>
            <Box className="informatin__box">
              <HomeIcon />
              <p>8820 American Way, Englewood CO 80112</p>
            </Box>

            <Box className="informatin__box">
              <PhoneAndroidIcon />
              <p>
                UK: (303) 795-0928 <br />
                International: +44203 788 7842
              </p>
            </Box>

            <Box className="informatin__box">
              <EmailIcon />
              <p>haminhlong3@gmail.com</p>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={3}>
            <p className="title__footer">Customer Service</p>
            <a href="/">Harman Corporate</a>
            <a href="/">Carrers</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
            <a href="/">Why Buy Direct</a>
            <a href="/">Newsletter</a>
          </Grid>

          <Grid item xs={12} md={12} lg={4}>
            <p className="title__footer">Payment Method</p>
            <p>Learn about events, contests, designing tips and more? Of course you do!</p>
            <p className="title__footer follow__me">Follow me</p>
            <a href="https://www.facebook.com/profile.php?id=100034814550396" target="_blank">
              <FacebookIcon />
            </a>
          </Grid>
        </Grid>

        <div className="divider"></div>

        <p className="coppyright">Copyright © 2023 Normann | Powered by Normann</p>
      </div>
    </footer>
  );
};

export default Index;
