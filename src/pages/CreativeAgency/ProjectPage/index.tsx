// THIRD IMPORT
import { useNavigate } from 'react-router-dom';

// IMAGES IMPORT
import Project1 from 'static/CreativeAgency/images/Project/project-1.jpg';
import Project2 from 'static/CreativeAgency/images/Project/project-2.jpg';
import Project3 from 'static/CreativeAgency/images/Project/project-3.jpg';
import Project4 from 'static/CreativeAgency/images/Project/project-4.jpg';
import Project5 from 'static/CreativeAgency/images/Project/project-5.jpg';
import Project6 from 'static/CreativeAgency/images/Project/project-6.jpg';
import Project7 from 'static/CreativeAgency/images/Project/project-7.jpg';
import Project8 from 'static/CreativeAgency/images/Project/project-8.jpg';
import Project9 from 'static/CreativeAgency/images/Project/project-9.jpg';

const Index = () => {
  const navigate = useNavigate();
  const projectData = [
    {
      id: 1,
      image: Project1,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 2,
      image: Project2,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 3,
      image: Project3,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 4,
      image: Project4,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 5,
      image: Project5,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 6,
      image: Project6,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 7,
      image: Project7,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 8,
      image: Project8,
      title: 'Oraging Brading',
      description: 'Brand'
    },
    {
      id: 9,
      image: Project9,
      title: 'Oraging Brading',
      description: 'Brand'
    }
  ];

  const category = [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Apparel'
    },
    {
      id: 3,
      name: 'Brading'
    },
    {
      id: 4,
      name: 'Packaging'
    },
    {
      id: 5,
      name: 'Prints'
    }
  ];

  return (
    <section className="project__page page container">
      <h2 className="title__home dark-color text-uppercase sz-48">Projects</h2>
      <h3 className="sub__title">See our latest projects that we where proud to work on</h3>
      <div className="category__filter">
        {category?.map((item) => (
          <div className="category" key={item?.id}>
            {item?.name}
          </div>
        ))}
      </div>
      <div className="project__container">
        <div className="projects">
          {projectData?.map((item) => (
            <div className="project" key={item?.id} onClick={() => navigate('/project-detail')}>
              <img src={item?.image} alt={item?.title} />
              <div className="content flex__center">
                <p className="title">{item?.title}</p>
                <p className="sub__title">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
