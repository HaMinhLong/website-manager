// PROJECT IMPORT
import { Grid } from '@mui/material';

// ICONS IMPORT
import SettingsIcon from '@mui/icons-material/Settings';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import TheatersIcon from '@mui/icons-material/Theaters';

const Index = () => {
  const contactData = [
    {
      id: 1,
      icon: SettingsIcon,
      name: 'Support',
      description: 'Jus let us know if you have any questions regarding our services'
    },
    {
      id: 2,
      icon: LocalPrintshopIcon,
      name: 'Printing & Lettering',
      description: 'We can tell you all about our technques and other specifics'
    },
    {
      id: 3,
      icon: TheatersIcon,
      name: 'Media & Marketing',
      description: 'Just let us know if you have any questions regarding our services'
    }
  ];
  return (
    <section className="contact__home container">
      <h2 className="title__home sz-48 dark-color">Contact US</h2>
      <p className="sub__title--home">& let us help you</p>
      <Grid container spacing="30px" className="contact__list">
        {contactData?.map((item, index) => (
          <Grid item xs={4} className="contact" key={item?.id}>
            {index === 0 ? <SettingsIcon /> : index === 1 ? <LocalPrintshopIcon /> : <TheatersIcon />}
            <p className="title">{item?.name}</p>
            <p className="description">{item?.description}</p>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Index;
