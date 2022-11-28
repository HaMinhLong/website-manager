/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

// PROJECT IMPORT
import LogoLight from 'static/Foodie/images/Home/logo.png';
import LogoDark from 'static/Foodie/images/Home/logo-dark.png';

// iCONS IMPORT
import SearchIcon from '@mui/icons-material/Search';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const theme = useTheme();
  const location = useLocation();

  const [scrollDown, setScrollDown] = useState(false);
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickScroll = (name: string) => {
    const element = document.getElementById(name);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) handleClickScroll(location.hash.split('#')[1]);
    else handleClickScroll('home');
  }, [location.pathname]);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) setScrollDown(true);
    else setScrollDown(false);
  });

  return (
    <>
      <div id="home" style={{ overflow: 'hidden' }}></div>
      <header className={scrollDown || matchDownMD ? 'active' : ''}>
        <div className="header__container container">
          <div className="logo__box" onClick={() => setToggleNavigation(false)}>
            <img src={scrollDown || matchDownMD ? LogoDark : LogoLight} alt="logo" />
          </div>
          <div className={toggleNavigation ? 'navigation active' : 'navigation'}>
            <ul>
              <li>
                <Link
                  onClick={() => {
                    handleClickScroll('home');
                    setToggleNavigation(false);
                  }}
                  to="/#home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleClickScroll('about');
                    setToggleNavigation(false);
                  }}
                  to="/#about"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleClickScroll('menu');
                    setToggleNavigation(false);
                  }}
                  to="/#menu"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleClickScroll('reservation');
                    setToggleNavigation(false);
                  }}
                  to="/#reservation"
                >
                  Reservation
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleClickScroll('contact');
                    setToggleNavigation(false);
                  }}
                  to="/#contact"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <SearchIcon className="search__icon" />
              </li>
              <li className="icon">
                <Link onClick={() => setToggleNavigation(false)} to="/">
                  <FacebookOutlinedIcon />
                </Link>
              </li>
              <li className="icon">
                <Link onClick={() => setToggleNavigation(false)} to="/">
                  <InstagramIcon />
                </Link>
              </li>
              <li className="icon">
                <Link onClick={() => setToggleNavigation(false)} to="/">
                  <TwitterIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__icon" onClick={() => setToggleNavigation(!toggleNavigation)}>
            {toggleNavigation ? <CloseIcon /> : <DehazeIcon />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
