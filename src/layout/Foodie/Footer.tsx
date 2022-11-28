// IMAGES IMPORT
import Logo from 'static/Foodie/images/Home/logo.png';

// ICONS IMPORT
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <img src={Logo} alt="logo page" />
        <p className="description">
          Theme build by&nbsp;&nbsp;
          <strong>Naru</strong>
        </p>
        <div className="icon__container">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
