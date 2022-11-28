// THIRD IMPORT
import { Grid } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';

// PROJECT IMPORT
import Team1 from 'static/Foodie/images/Home/team-1.png';
import Team2 from 'static/Foodie/images/Home/team-2.png';
import Team3 from 'static/Foodie/images/Home/team-3.png';
import Team4 from 'static/Foodie/images/Home/team-4.png';

const Index = () => {
  return (
    <section className="team__home container">
      <div className="title__container">
        <h2 className="title__home">our team</h2>
        <div>
          <div className="divider"></div>
          <p className="sub__title">is the best</p>
          <div className="divider"></div>
        </div>
      </div>
      <Grid container>
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={10}
          dots={false}
          autoplay
          loop
          touchDrag={true}
          responsive={{
            0: {
              items: 1,
              stagePadding: 0
            },
            600: {
              items: 2,
              stagePadding: 0
            },
            1024: {
              items: 3,
              stagePadding: 0
            },
            1300: {
              items: 4,
              stagePadding: 0
            }
          }}
          key={`carousel_master`}
        >
          <Grid item xs={12} className="team">
            <div className="image__box">
              <img src={Team1} alt="team" />
            </div>
            <div className="content">
              <p className="name">Carol William</p>
              <p className="title">Manager</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nostrum quo architecto?</p>
            </div>
          </Grid>
          <Grid item xs={12} className="team">
            <div className="image__box">
              <img src={Team2} alt="team" />
            </div>
            <div className="content">
              <p className="name">Carol William</p>
              <p className="title">Manager</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nostrum quo architecto?</p>
            </div>
          </Grid>
          <Grid item xs={12} className="team">
            <div className="image__box">
              <img src={Team3} alt="team" />
            </div>
            <div className="content">
              <p className="name">Carol William</p>
              <p className="title">Manager</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nostrum quo architecto?</p>
            </div>
          </Grid>

          <Grid item xs={12} className="team">
            <div className="image__box">
              <img src={Team4} alt="team" />
            </div>
            <div className="content">
              <p className="name">Carol William</p>
              <p className="title">Manager</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nostrum quo architecto?</p>
            </div>
          </Grid>
        </OwlCarousel>
      </Grid>
    </section>
  );
};

export default Index;
