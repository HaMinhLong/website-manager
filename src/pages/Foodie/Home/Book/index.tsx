// THIRD IMPORT
import { Grid } from '@mui/material';

// IMAGES IMPORT
import Book from 'static/Foodie/images/Home/book.jpg';

const Index = () => {
  return (
    <section className="book__home" id="reservation">
      <img src={Book} alt="bg book" className="bg__book" />
      <div className="container">
        <form>
          <div className="title__container">
            <h2 className="title__home">Select a Date & Book Now</h2>
            <div>
              <div className="divider"></div>
              <p className="sub__title">We will confirm order via E-mail or Phone</p>
              <div className="divider"></div>
            </div>
          </div>
          <Grid container spacing="20px">
            <Grid item xs={12}>
              <input type="text" name="name" required placeholder="Họ tên *" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <input type="number" className="col-5" name="phone" required placeholder="Số điên thoại *" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <input type="email" className="col-5" name="email" required placeholder="E-mail *" />
            </Grid>
            <Grid item xs={12}>
              <textarea name="description" id="description" required placeholder="Lời nhắn"></textarea>
            </Grid>
            <Grid item xs={12}>
              <button type="submit">Book now</button>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
};

export default Index;
