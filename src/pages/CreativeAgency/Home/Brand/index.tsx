import React from 'react';
import OwlCarousel from 'react-owl-carousel';

// THIRD IMPORT
import Brand1 from 'static/CreativeAgency/images/home/brand-1.png';
import Brand2 from 'static/CreativeAgency/images/home/brand-2.png';
import Brand3 from 'static/CreativeAgency/images/home/brand-3.png';
import Brand4 from 'static/CreativeAgency/images/home/brand-4.png';
import Brand5 from 'static/CreativeAgency/images/home/brand-5.png';

const Index = () => {
  return (
    <section className="brand__home">
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
            items: 3,
            stagePadding: 0
          },
          1024: {
            items: 4,
            stagePadding: 0
          },
          1300: {
            items: 7,
            stagePadding: 0
          }
        }}
        key={`carousel_master`}
      >
        <img src={Brand1} alt="brand" />
        <img src={Brand2} alt="brand" />
        <img src={Brand3} alt="brand" />
        <img src={Brand4} alt="brand" />
        <img src={Brand5} alt="brand" />
      </OwlCarousel>
    </section>
  );
};

export default Index;
