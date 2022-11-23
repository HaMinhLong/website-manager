// PROJECT IMPORT
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ICONS IMPORT
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

// STATIC IMPORT
import LogoPage from 'static/CreativeAgency/images/home/logo-page.png';

const Header = () => {
  const location = useLocation();

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
            <Link to="/">
              <img src={LogoPage} alt="logo page" />
            </Link>
          </div>
          <ul className="navigation">
            <li>
              <Link to="/#home" onClick={() => handleClickScroll('home')}>
                Home
              </Link>
              <Link to="/#service__home" onClick={() => handleClickScroll('service__home')}>
                Services
              </Link>
              <Link to="/project">Projects</Link>
              <Link to="/team">Team</Link>
              <Link to="/#client" onClick={() => handleClickScroll('client')}>
                Partners
              </Link>
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
    </>
  );
};

export default Header;
