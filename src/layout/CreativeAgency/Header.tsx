// PROJECT IMPORT
import React from 'react';
import { Link } from 'react-router-dom';

// ICONS IMPORT
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

// STATIC IMPORT
import LogoPage from 'static/CreativeAgency/images/home/logo-page.png';

const Header = () => {
  return (
    <header className="header__home flex__center">
      <div className="header__box container flex__between">
        <div className="logo__box">
          <Link to="/">
            <img src={LogoPage} alt="logo page" />
          </Link>
        </div>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/project">Projects</Link>
            <Link to="/team">Team</Link>
            <Link to="/partner">Partners</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/" className="icon">
              <InstagramIcon />
            </Link>
            <Link to="/" className="icon">
              <TwitterIcon />
            </Link>
            <SearchIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
