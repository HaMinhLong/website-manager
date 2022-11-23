// THIRD IMPORT
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// IMAGES IMPORT
import Team1 from 'static/CreativeAgency/images/home/team-1.png';
import Team2 from 'static/CreativeAgency/images/home/team-2.png';
import Team3 from 'static/CreativeAgency/images/Team/team-3.jpg';
import Team4 from 'static/CreativeAgency/images/Team/team-4.jpg';
import Team5 from 'static/CreativeAgency/images/Team/team-5.jpg';
import Team6 from 'static/CreativeAgency/images/Team/team-6.jpg';

import Master1 from 'static/CreativeAgency/images/home/master-1.jpg';
import Master2 from 'static/CreativeAgency/images/home/master-2.jpg';
import Master3 from 'static/CreativeAgency/images/home/master-3.jpg';
import Master4 from 'static/CreativeAgency/images/home/master-4.jpg';

const Index = () => {
  const teamData = [
    {
      id: 1,
      image: Team1,
      name: 'kate wilson',
      job: 'advertising',
      description: 'Highly experienced professional that is going to make amazing things for you'
    },
    {
      id: 2,
      image: Team2,
      name: 'JOHN BROWN',
      job: 'developer',
      description: 'Highly experienced professional that is going to make amazing things for you'
    },
    {
      id: 3,
      image: Team3,
      name: 'PAUL WATSON',
      job: 'advertising',
      description: 'Highly experienced professional that is going to make amazing things for you'
    },
    {
      id: 4,
      image: Team4,
      name: 'MATT KENNING',
      job: 'developer',
      description: 'Highly experienced professional that is going to make amazing things for you'
    },
    {
      id: 5,
      image: Team5,
      name: 'OLIVIA RYAIN',
      job: 'advertising',
      description: 'Highly experienced professional that is going to make amazing things for you'
    },
    {
      id: 6,
      image: Team6,
      name: 'LUCY WALSH',
      job: 'developer',
      description: 'Highly experienced professional that is going to make amazing things for you'
    }
  ];

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
    },
    {
      id: 4,
      image: Master4,
      title: 'Photographer',
      subTitle: 'photojourmalist',
      description: `If you are enthusiastic person with a pinch of talent don’t hesitate to join our team
      `
    }
  ];

  return (
    <section className="team__page page container">
      <h2 className="title__home dark-color sz-48 text-uppercase">Master Crew</h2>
      <h3 className="sub__title">Our professional team will be happy to bring amazing ideas and projects to life</h3>
      <Grid container columnSpacing="50px" rowSpacing="100px" className="teams">
        {teamData?.map((item) => (
          <Grid item xs={12} md={6} key={item?.id}>
            <div className="team">
              <Grid container columnSpacing="30px">
                <Grid item xs={6} className="image__box">
                  <img src={item?.image} alt={item?.name} />
                </Grid>
                <Grid item xs={6} className="content">
                  <p className="name">{item?.name}</p>
                  <p className="job">{item?.job}</p>
                  <p className="description">{item?.description}</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
      <h2 className="title__home dark-color sz-48 text-uppercase">join our team</h2>
      <h3 className="sub__title">Be part of an amazing team that lives to create and make world more beautiful</h3>
      <Grid container columnSpacing="50px" rowSpacing="100px" className="teams">
        {mastersData?.map((item) => (
          <Grid item xs={12} md={6} key={item?.id}>
            <div className="team">
              <Grid container columnSpacing="30px">
                <Grid item xs={6} className="image__box">
                  <img src={item?.image} alt={item?.title} />
                </Grid>
                <Grid item xs={6} className="content">
                  <p className="name">{item?.title}</p>
                  <p className="job">{item?.subTitle}</p>
                  <p className="description">{item?.description}</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
        <Grid item xs={12}>
          <button className="btn">Join now!</button>
        </Grid>
      </Grid>
    </section>
  );
};

export default Index;
