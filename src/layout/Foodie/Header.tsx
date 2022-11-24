/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// PROJECT IMPORT
import LogoLight from 'static/Foodie/images/Home/logo.png';
import LogoDark from 'static/Foodie/images/Home/logo-dark.png';

// iCONS IMPORT
import SearchIcon from '@mui/icons-material/Search';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () => {
  const location = useLocation();

  const [scrollDown, setScrollDown] = useState(false);

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
      <header className={scrollDown ? 'active' : ''}>
        <div className="header__container container">
          <div className="logo__box">
            <img src={scrollDown ? LogoDark : LogoLight} alt="logo" />
          </div>
          <div className="navigation">
            <ul>
              <li>
                <Link
                  onClick={() => {
                    handleClickScroll('home');
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
                  }}
                  to="/#contact"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <SearchIcon />
              </li>
              <li>
                <FacebookOutlinedIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
