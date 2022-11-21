// THIRD IMPORT

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

const Project = () => {
  return (
    <section className="project__home">
      <div className="bg__main"></div>
      <div className="bg__dark"></div>
      <div className="project__container container">
        <div className="projects">
          <div className="project">
            <img src={Project1} alt="Project1" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project2} alt="Project2" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project3} alt="Project3" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project4} alt="Project4" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project5} alt="Project5" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project6} alt="Project6" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project7} alt="Project7" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project8} alt="Project8" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
          <div className="project">
            <img src={Project9} alt="Project9" />
            <div className="content flex__center">
              <p className="title">Oraging Branding</p>
              <p className="sub__title">Brand</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn">View All Project</button>
    </section>
  );
};

export default Project;
