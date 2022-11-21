// THIRD IMPORT
import { Grid } from '@mui/material';

// IMAGES IMPORT
import Subscribe from 'static/CreativeAgency/images/home/subscribe.jpg';

const Index = () => {
  return (
    <section className="subscribe__home ">
      <img src={Subscribe} alt="bg" className="bg" />
      <div className="container">
        <Grid sx={{ height: '100%' }} container columnSpacing="50px" display="flex" alignItems="center">
          <Grid item xs={6}>
            <h2 className="title__home sz-48">
              Subscribe to <br />
              our newsletter
            </h2>
          </Grid>
          <Grid item xs={6}>
            <form>
              <input required type="text" name="name" placeholder="Enter your email" />
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Index;
