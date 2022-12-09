// THIRD IMPORT
import { Grid } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  return (
    <section className="testimonials__home--main container">
      <p className="title__section--small">Testimonials</p>
      <h2 className="title__section--large">They love us</h2>
      <div className="main__section">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={2}>
            <div className="list">
              <div className="testimonial__group">
                <p>Lesley Grand</p>
                <p>John Frick</p>
                <p>Mark Eganberg</p>
                <p>Guest</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8} lg={10}>
            <div className="detail__box">
              <div className="detail">
                <FormatQuoteIcon />
                <p className="description">
                  Incredible as always. This guys have excellent taste,modeling, texturing & rendering skills. The design fits in with what
                  I would perceive as being Icelandic, the high wooden roof design and linear slatted interior elements and colours.
                </p>
                <p className="title">- Mark Eganberg</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Testimonials;
