// THIRD IMPORT
import { useState } from 'react';
import { Grid } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';
import { useNavigate } from 'react-router-dom';

// PROJECT IMPORT
import BreadCrumb from 'layout/CreativeAgency/BreadCrumb';

// IMAGES IMPORT
import ProjectDetail1 from 'static/CreativeAgency/images/ProjectDetail/project-detail-1.jpg';
import ProjectDetail2 from 'static/CreativeAgency/images/ProjectDetail/project-detail-2.jpg';
import ProjectDetail3 from 'static/CreativeAgency/images/ProjectDetail/project-detail-3.jpg';
import ProjectDetail4 from 'static/CreativeAgency/images/ProjectDetail/project-detail-4.jpg';

import Project1 from 'static/CreativeAgency/images/Project/project-1.jpg';
import Project2 from 'static/CreativeAgency/images/Project/project-2.jpg';
import Project3 from 'static/CreativeAgency/images/Project/project-3.jpg';
import Project4 from 'static/CreativeAgency/images/Project/project-4.jpg';
import Project5 from 'static/CreativeAgency/images/Project/project-5.jpg';

const Index = () => {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(ProjectDetail1);

  const relatedItems = [
    {
      id: 1,
      image: Project1,
      title: 'Iconic Magazie',
      description: 'Drop of rain could be heard hitting the pane, which made him feel quite sad could be heard hitting the pane'
    },
    {
      id: 2,
      image: Project2,
      title: 'Iconic Magazie',
      description: 'Drop of rain could be heard hitting the pane, which made him feel quite sad could be heard hitting the pane'
    },
    {
      id: 3,
      image: Project3,
      title: 'Iconic Magazie',
      description: 'Drop of rain could be heard hitting the pane, which made him feel quite sad could be heard hitting the pane'
    },
    {
      id: 4,
      image: Project4,
      title: 'Iconic Magazie',
      description: 'Drop of rain could be heard hitting the pane, which made him feel quite sad could be heard hitting the pane'
    },
    {
      id: 5,
      image: Project5,
      title: 'Iconic Magazie',
      description: 'Drop of rain could be heard hitting the pane, which made him feel quite sad could be heard hitting the pane'
    }
  ];

  return (
    <section className="project__detail page container">
      <BreadCrumb parentName="Project" parentUrl="/project" currentName="Oranging Branding" />
      <div className="detail">
        <Grid container columnSpacing="30px">
          <Grid item xs={12} lg={8} className="left__side">
            <img src={mainImage} alt="name" className="main__image" />
            <OwlCarousel
              className="owl-theme"
              items={4}
              margin={10}
              dots={false}
              autoplay
              loop
              touchDrag={true}
              responsive={{
                0: {
                  items: 2,
                  stagePadding: 0
                },
                600: {
                  items: 2,
                  stagePadding: 0
                },
                1024: {
                  items: 3,
                  stagePadding: 0
                },
                1300: {
                  items: 3,
                  stagePadding: 0
                }
              }}
              key={`carousel_master`}
            >
              <img onClick={() => setMainImage(ProjectDetail1)} src={ProjectDetail1} alt="name" className="item__image" />
              <img onClick={() => setMainImage(ProjectDetail2)} src={ProjectDetail2} alt="name" className="item__image" />
              <img onClick={() => setMainImage(ProjectDetail3)} src={ProjectDetail3} alt="name" className="item__image" />
              <img onClick={() => setMainImage(ProjectDetail4)} src={ProjectDetail4} alt="name" className="item__image" />
            </OwlCarousel>
          </Grid>
          <Grid item xs={12} lg={4} className="right__side">
            <div className="project__name">Oranging Branding</div>
            <div className="project__description">
              he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state
              couldn’t get into that position. However hard he threw himself.
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="related__item">
        <p className="related__item">Related Items</p>
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={10}
          dots={false}
          autoplay
          loop
          touchDrag={true}
          responsive={{
            0: {
              items: 2,
              stagePadding: 0
            },
            600: {
              items: 2,
              stagePadding: 0
            },
            1024: {
              items: 3,
              stagePadding: 0
            },
            1300: {
              items: 4,
              stagePadding: 0
            }
          }}
          key={`carousel_master`}
        >
          {relatedItems?.map((item) => (
            <div key={item?.id} className="item" onClick={() => navigate('/project-detail')}>
              <div className="image__box">
                <img src={item?.image} alt={item?.title} />
              </div>
              <div className="content">
                <p className="title">{item?.title}</p>
                <p className="description">{item?.description}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Index;
