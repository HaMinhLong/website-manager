/* eslint-disable react-hooks/exhaustive-deps */
// PROJECT IMPORT
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ICONS IMPORT
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

// STATIC IMPORT
import LogoPage from 'static/CreativeAgency/images/home/logo-page.png';

const Header = () => {
  const location = useLocation();

  const [toggleNavigation, setToggleNavigation] = useState(false);

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

  return (
    <>
      <div id="home" style={{ overflow: 'hidden' }}></div>
      <header className="header__home flex__center">
        <div className="header__box container flex__between">
          <div className="logo__box">
            <Link onClick={() => setToggleNavigation(false)} to="/">
              <img src={LogoPage} alt="logo page" />
            </Link>
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
                    handleClickScroll('service__home');
                    setToggleNavigation(false);
                  }}
                  to="/#service__home"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggleNavigation(false)} to="/project">
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggleNavigation(false)} to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleClickScroll('client');
                    setToggleNavigation(false);
                  }}
                  to="/#client"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggleNavigation(false)} to="/contact">
                  Contacts
                </Link>
              </li>
              <li className="form__search">
                <form>
                  <input required placeholder="Search here ..." type="text" />
                  <button type="submit">
                    <SearchIcon />
                  </button>
                </form>
              </li>
              <li>
                <Link onClick={() => setToggleNavigation(false)} to="/" className="icon">
                  <InstagramIcon />
                </Link>
                <Link onClick={() => setToggleNavigation(false)} to="/" className="icon twitter">
                  <TwitterIcon />
                </Link>
                <SearchIcon className="search__icon" />
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
