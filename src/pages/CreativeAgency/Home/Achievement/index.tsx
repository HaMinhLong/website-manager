import React from 'react';

const Index = () => {
  return (
    <section className="achievement__home">
      <div className="achievement__container container">
        <h2 className="title__home sz-48 text-uppercase">Achievements</h2>
        <p className="sub__title">We are proud of</p>
        <div className="achievements">
          <div className="achievement">
            <p className="number sz-60">18</p>
            <p className="name">Awards</p>
            <p className="sub__name">Winnings</p>
          </div>
          <div className="achievement">
            <p className="number sz-60">24</p>
            <p className="name">Adweek</p>
            <p className="sub__name">Reviews</p>
          </div>
          <div className="achievement">
            <p className="number sz-60">7</p>
            <p className="name">The Weeby</p>
            <p className="sub__name">Awards</p>
          </div>
          <div className="achievement">
            <p className="number sz-60">12</p>
            <p className="name">Omma</p>
            <p className="sub__name">Winnings</p>
          </div>
          <div className="achievement">
            <p className="number sz-60">4</p>
            <p className="name">Design pick</p>
            <p className="sub__name">Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
