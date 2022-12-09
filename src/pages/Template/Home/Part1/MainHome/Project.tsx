// THIRD IMPORT

// IMAGES IMPORT
import Project1 from 'static/Template/images/Home/Part1/MainHome/project-home-1.jpg';
import Project2 from 'static/Template/images/Home/Part1/MainHome/project-home-2.jpg';
import Project3 from 'static/Template/images/Home/Part1/MainHome/project-home-3.jpg';
import Project4 from 'static/Template/images/Home/Part1/MainHome/project-home-4.jpg';
import Project5 from 'static/Template/images/Home/Part1/MainHome/project-home-5.jpg';
import Project6 from 'static/Template/images/Home/Part1/MainHome/project-home-6.jpg';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Poolscape Villa',
      year: '2010',
      description:
        'The Seascape Villas project constitutes one of the first urban interventions in this very unique context, a landscape dominated by mountains and sea.',
      images: Project1
    },
    {
      id: 2,
      title: 'European Lard Station',
      year: '',
      description:
        'Hemicycle and offices for the Headquarters of the European Parliament including: a 750-seat hemicycle, 1133 offices for members of Parliament, 18 commission halls and catering centre and service areas.',
      images: Project2
    },
    {
      id: 3,
      title: 'Yabroudi Villa',
      year: '2018',
      description:
        'The project’s architecture expresses complementary features of a villa, made up of calm, quiet areas designed for family life, as well as reception areas, which are open and welcoming.',
      images: Project3
    },
    {
      id: 4,
      title: 'Cultural Complex Centre',
      year: '2009',
      description:
        'Located near Muscat main entrance, the Cultural Centre emerges from a unique landscape, between the sea and the mountains, as an oasis where palm trees and mineral colonnades offer cool public spaces.',
      images: Project4
    },
    {
      id: 5,
      title: 'Dalbourne Villa',
      year: '2012',
      description:
        'The two Daourne villas are situated in the northern part of Guangzhou. The villa area is bordered by a new high speed road to the west, and by the famous Bai Yun mountain to the east.',
      images: Project5
    },
    {
      id: 6,
      title: 'Amman Rotana Hotel',
      year: '2015',
      description:
        '54-room hotel, including atrium, cafe, restaurants, swimming pool, spa, fitness centre, conference room, ballroom and VIP panoramic lounge.',
      images: Project6
    }
  ];
  return (
    <section className="project__home--main container">
      <p className="title__section--small">last projects</p>
      <h2 className="title__section--large">Make it with passion.</h2>
      <div className="projects">
        {projects?.map((project, index) => (
          <div className={index % 2 === 0 ? 'project' : 'project active'}>{project?.title}</div>
        ))}
      </div>
    </section>
  );
};

export default Project;
