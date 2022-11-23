// THIRD IMPORT
import OwlCarousel from 'react-owl-carousel';

// IMAGES IMPORT
import Client1 from 'static/CreativeAgency/images/home/client-1.png';
import Client2 from 'static/CreativeAgency/images/home/client-2.png';
import Client3 from 'static/CreativeAgency/images/home/client-3.png';
import Client4 from 'static/CreativeAgency/images/home/client-4.png';

const Index = () => {
  const clientData = [
    {
      id: 1,
      image: Client1,
      title: 'Lebeaute',
      subTitle: 'Cosmetic Company',
      description:
        'I am so happy, me dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.'
    },
    {
      id: 2,
      image: Client2,
      title: 'Lebeaute',
      subTitle: 'Cosmetic Company',
      description:
        'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.'
    },
    {
      id: 3,
      image: Client3,
      title: 'Lebeaute',
      subTitle: 'Cosmetic Company',
      description:
        'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees,'
    },
    {
      id: 4,
      image: Client4,
      title: 'Lebeaute',
      subTitle: 'Cosmetic Company',
      description:
        'I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks.'
    }
  ];

  return (
    <section className="client__home container" id="client">
      <h2 className="title__home dark-color text-uppercase sz-48">Our Clients</h2>
      <h3 className="sub__title">& partners</h3>
      <div className="clients">
        <OwlCarousel
          className="owl-theme"
          items={4}
          margin={10}
          autoplay
          loop
          touchDrag={true}
          responsive={{
            0: {
              items: 1,
              stagePadding: 0
            }
          }}
          key={`carousel_master`}
        >
          {clientData?.map((item) => (
            <div key={item?.id} className="client">
              <div className="image__box">
                <img src={item?.image} alt={item?.title} />
                <div className="content">
                  <p className="title">{item?.title}</p>
                  <p className="sub__title--small">{item?.subTitle}</p>
                </div>
              </div>
              <p className="description">{item?.description}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Index;
