/* eslint-disable jsx-a11y/iframe-has-title */
// THIRD IMPORT
import { Grid } from '@mui/material';

// iCONS IMPORT
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const ContactPage = () => {
  const renderLabel = (name: string, id: string) => {
    return (
      <label htmlFor={id} style={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
        {name} <CheckCircleOutlineOutlinedIcon sx={{ width: '15px', ml: '5px', color: '#a3a3a3' }} />
      </label>
    );
  };

  return (
    <section className="contact__page page">
      <Grid container columnSpacing="50px" sx={{ height: '600px' }}>
        <Grid item xs={12} lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.8874854112767!2d105.8047464!3d21.0506866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab080150ad97%3A0x6daa89d4aac31f97!2sV%C4%83n%20Ph%C3%B2ng%20C%C3%B4ng%20Ty%20TNHH%20PT%20FITNESS!5e0!3m2!1svi!2s!4v1669088104422!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="right__side">
            <h2 className="title__home sz-48 dark-color text-uppercase">Contact us</h2>
            <p className="description">We will be happy to answer your questions</p>
            <div className="contact__information">
              <div className="box">
                <LocationOnOutlinedIcon />
                <div className="content">
                  <p className="title">Location</p>
                  <p className="description">Street number and town name 23</p>
                </div>
              </div>
              <div className="box">
                <MarkunreadOutlinedIcon />
                <div className="content">
                  <p className="title">E-mail</p>
                  <p className="description">Street number and town name 23</p>
                </div>
              </div>
              <div className="box">
                <PhoneAndroidOutlinedIcon />
                <div className="content">
                  <p className="title">Phone number</p>
                  <p className="description">Street number and town name 23</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="contact__form container">
        <h2 className="title__home dark-color text-uppercase sz-60">Join our team</h2>
        <h3 className="sub__title">Apply for a job</h3>
        <form>
          <Grid container columnSpacing="30px" rowSpacing="20px">
            <Grid item xs={12} lg={6}>
              {renderLabel('Họ tên', 'name')}
              <input type="text" required name="name" id="name" />
            </Grid>
            <Grid item xs={12} lg={6}>
              {renderLabel('Số điện thoại', 'phone')}
              <input type="number" required name="phone" id="phone" />
            </Grid>
            <Grid item xs={12} lg={12}>
              {renderLabel('E-mail', 'email')}
              <input type="email" required name="email" id="email" />
            </Grid>
            <Grid item xs={12} lg={12}>
              {renderLabel('Lời nhắn', 'message')}
              <textarea name="message" required id="message" />
            </Grid>
            <Grid item xs={12}>
              <button className="btn" type="submit">
                Submit
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
