// THIRD IMPORT
import { Grid } from '@mui/material';

// PROJECT IMPORT
import Fish from 'static/Foodie/images/Home/fish.png';
import Menu1 from 'static/Foodie/images/Home/menu-1.jpg';
import Menu2 from 'static/Foodie/images/Home/menu-2.png';

const Index = () => {
  return (
    <section className="menu__home " id="menu">
      <div className="bg__menu--one">
        <img src={Menu1} alt="bg menu" />
      </div>
      <div className="bg__menu--two">
        <img src={Menu2} alt="bg menu" />
      </div>
      <div className="menus container">
        <div className="image__box">
          <img src={Fish} alt="fish icon" className="fish__icon" />
        </div>
        <div className="title__container">
          <h2 className="title__home">Enjoy The Best Cuisine</h2>
          <div>
            <div className="divider"></div>
            <p className="sub__title">on this planet</p>
            <div className="divider"></div>
          </div>
        </div>
        <Grid container columnSpacing="50px">
          <Grid item xs={12} lg={6}>
            <h3 className="title__menu--orange">Starters</h3>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <h3 className="title__menu--orange">Mains</h3>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
            <div className="menu">
              <div className="content">
                <p className="title">Proin gravida gravida</p>
                <p className="price">$10.50</p>
              </div>
              <div className="divider"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quod, commodi beatae hic, praesentium atque ut quaerat
                dolor dignissimos ex fugit aliquam quas ratione ipsam explicabo quis harum aspernatur.
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <a href="#menu" className="btn">
              View full menu
            </a>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Index;
