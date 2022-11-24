// THIRD IMPORT
import { Grid } from '@mui/material';

// IMAGES IMPORT
import IntroduceOne from 'static/Foodie/images/Home/introduce-1.jpg';
import IntroduceTwo from 'static/Foodie/images/Home/introduce-2.jpg';

const Index = () => {
  return (
    <section className="introduce__home">
      <Grid container rowSpacing="100px">
        <Grid item xs={12} className="introduce">
          <Grid container columnSpacing="100px">
            <Grid item xs={12} md={6} className="image__box">
              <img src={IntroduceOne} alt="introduce one" />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="content">
                <em className="title">Welcome to Jevelin Restaurant</em>
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, tempore cumque. Doloremque reprehenderit recusandae
                  quidem voluptate labore eligendi dolor sed error molestias est. Obcaecati laborum ipsam minus! Culpa, iste dolorum!
                </p>
                <a href="/#about" className="about__us">
                  About us
                </a>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="introduce active">
          <Grid container columnSpacing="100px" direction="row-reverse">
            <Grid item xs={12} md={6} className="image__box">
              <img src={IntroduceTwo} alt="introduce one" />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="content">
                <em className="title">Welcome to Jevelin Restaurant</em>
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, tempore cumque. Doloremque reprehenderit recusandae
                  quidem voluptate labore eligendi dolor sed error molestias est. Obcaecati laborum ipsam minus! Culpa, iste dolorum!
                </p>
                <a href="/#about" className="about__us">
                  About us
                </a>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Index;
