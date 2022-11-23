// THIRD IMPORT
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// IMAGES IMPORT
import Team1 from 'static/CreativeAgency/images/home/team-1.png';
import Team2 from 'static/CreativeAgency/images/home/team-2.png';

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
    }
  ];

  return (
    <section className="team__home container">
      <Grid container spacing="30px">
        {teamData?.map((item, index) => (
          <Grid item xs={12} md={6} lg={6} key={item?.id}>
            <div className="team" data-aos="fade-up" data-aos-delay={(index + 1) * 200}>
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
      <Link to="/team" className="btn">
        Meet the team
      </Link>
    </section>
  );
};

export default Index;
