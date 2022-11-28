/* eslint-disable jsx-a11y/iframe-has-title */
// THIRD IMPORT
import { Grid } from '@mui/material';

const Index = () => {
  return (
    <section className="contact__home" id="contact">
      <Grid container>
        <Grid item xs={12} lg={6}>
          <div className="content">
            <h2 className="title__home">
              How to Find <br />& Contact Us
            </h2>
            <div className="date__container">
              <div className="date">
                <div className="day">Monday - Thursday</div>
                <div className="hour">10:00 - 22:00</div>
              </div>
              <div className="date">
                <div className="day">Friday - Saturday</div>
                <div className="hour">11:00 - 21:00</div>
              </div>
              <div className="date">
                <div className="day">Sunday</div>
                <div className="hour">Closed</div>
              </div>
            </div>
            <div className="address__container">
              <div className="address">
                <div className="title">Postal Address:</div>
                <div className="des">Mánatún 35 105 Reykjavík</div>
              </div>
              <div className="address">
                <div className="title">Restaurant:</div>
                <div className="des">Grafarvogur 69, ON K2P 0G1, Reykjavík</div>
              </div>
              <div className="address">
                <div className="title">Business Phone:</div>
                <div className="des">+1 844 295 0715</div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6} className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.8874854112767!2d105.8047464!3d21.0506866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab080150ad97%3A0x6daa89d4aac31f97!2sV%C4%83n%20Ph%C3%B2ng%20C%C3%B4ng%20Ty%20TNHH%20PT%20FITNESS!5e0!3m2!1svi!2s!4v1669088104422!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </section>
  );
};

export default Index;
