// THIRD IMPORT
import { Grid } from '@mui/material';

const Index = () => {
  const stepData = [
    {
      id: 1,
      title: 'Project/// Visualisation',
      description: 'On her way she met a copy. The copy warned the Little Blind Text, that where it came from'
    },
    {
      id: 2,
      title: 'Creation/// & Selection',
      description: 'One day however a small line of blind text by the name of Lorem Ipsum'
    },
    {
      id: 3,
      title: 'Lounching/// Campaign',
      description: 'She packed her seven versalia, put her initial into the belt and made herself on the way'
    }
  ];

  return (
    <section className="step__home">
      <Grid container spacing="0px" className="steps">
        {stepData?.map((item, index) => (
          <Grid key={item?.id} item xs={12} md={4} className="step">
            <div className="number__bg">0{index + 1}</div>
            <div className="content" data-aos="zoom-in" data-aos-delay={(index + 1) * 200}>
              <p className="title">
                {item?.title?.split('///')[0]}
                <br />
                {item?.title?.split('///')[1]}
              </p>
              <p className="description">{item?.description}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Index;
