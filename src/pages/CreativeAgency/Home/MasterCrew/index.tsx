// THIRD IMPORT
import { Grid } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';

// IMAGES IMPORT
import Master1 from 'static/CreativeAgency/images/home/master-1.jpg';
import Master2 from 'static/CreativeAgency/images/home/master-2.jpg';
import Master3 from 'static/CreativeAgency/images/home/master-3.jpg';

const Index = () => {
  const mastersData = [
    {
      id: 1,
      image: Master1,
      title: 'Designer',
      subTitle: 'web design',
      description: `If you are enthusiastic person with a pinch of talent don’t hesitate to join our team`
    },
    {
      id: 2,
      image: Master2,
      title: 'MARKETING',
      subTitle: 'marketing specialist',
      description: `If you are enthusiastic person with a pinch of talent don’t hesitate to join our team`
    },
    {
      id: 3,
      image: Master3,
      title: 'DEVELOPER',
      subTitle: 'front end',
      description: `If you are enthusiastic person with a pinch of talent don’t hesitate to join our team
      `
    }
  ];

  return (
    <section className="master__crew container">
      <Grid container spacing="50px">
        <Grid item xs={12} md={6} className="left__side">
          <h2 className="title__home sz-60 dark-color text-uppercase">
            Master <br />
            crew
          </h2>
          <p className="description">Our professional team will be happy to bring amazing ideas and projects to life</p>
        </Grid>
        <Grid item xs={12} md={6} className="right__side">
          <OwlCarousel
            className="owl-theme"
            items={4}
            margin={10}
            autoplay
            loop
            touchDrag={true}
            responsive={{
              0: {
                items: 1,
                stagePadding: 0
              },
              600: {
                items: 1,
                stagePadding: 0
              },
              1024: {
                items: 1,
                stagePadding: 0
              },
              1300: {
                items: 1,
                stagePadding: 0
              }
            }}
            key={`carousel_master`}
          >
            {mastersData?.map((item) => (
              <Grid className="master" container spacing="20px" key={item?.id}>
                <Grid item xs={6} className="image__box">
                  <img src={item?.image} alt={item?.title} />
                  <a href="/contact">Join Now!</a>
                </Grid>
                <Grid item xs={6} className="content">
                  <p className="title">{item?.title}</p>
                  <p className="sub__title">{item?.subTitle}</p>
                  <p className="description">{item?.description}</p>
                </Grid>
              </Grid>
            ))}
          </OwlCarousel>
        </Grid>
      </Grid>
    </section>
  );
};

export default Index;
