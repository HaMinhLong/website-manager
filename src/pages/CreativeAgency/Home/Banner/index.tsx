/* eslint-disable react/jsx-no-target-blank */
// THIRD IMPORT
import { useEffect } from 'react';

// ICONS IMPORT
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

// IMAGES IMPORT
import BannerImage from 'static/CreativeAgency/images/home/banner-home.png';

const Index = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {};

    const bannerContainer = document.getElementsByClassName('banner__home')[0];
    bannerContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      bannerContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section className="banner__home flex__between">
      <div className="bg"></div>
      <div className="left__side">
        <div className="circle w50"></div>
        <div className="circle w80"></div>
        <div className="circle w30"></div>
        <div className="circle w30"></div>
        <p>CR</p>
        <h1 data-aos="fade-right" data-aos-delay="300">
          Creative <br />
          Agency
        </h1>
        <a href="https://www.youtube.com/watch?v=wQX8_nwylTY" target="_blank" data-aos="fade-right" data-aos-delay="300">
          <div className="flex__center">
            <ChangeHistoryIcon />
          </div>
          Watch a video intro
        </a>
      </div>
      <div className="right__side">
        <img src={BannerImage} alt="banner home" id="banner__image" data-aos="fade-left" data-aos-delay="300" />
      </div>
    </section>
  );
};

export default Index;
