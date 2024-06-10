import React, { useEffect } from "react";
import "./TourComponent.css";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TourComponent = ({ tours }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="tour-container">
      <Carousel
        arrows={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        customTransition="transform 600ms ease-in-out"
        transitionDuration={300}
        responsive={responsive}
        className="carousel"
      >
        <img className="tour-image" src={tours.img_1} alt={tours.img_1} />
        <img className="tour-image" src={tours.img_2} alt={tours.img_2} />
        <img className="tour-image" src={tours.img_3} alt={tours.img_3} />
      </Carousel>

      <div className="tour-info_container">
        <h1 className="tour-heading">{tours.title}</h1>
        <p className="tour-description">This tour offers the following:</p>
        <div className="tour-offers">
          <p className="tour-blog">{tours.tour_offer_1}</p>
          <p className="tour-blog">{tours.tour_offer_2}</p>
          <p className="tour-blog">{tours.tour_offer_3}</p>
          <p className="tour-blog">{tours.tour_offer_4}</p>
        </div>
      </div>
    </div>
  );
};

export default TourComponent;
