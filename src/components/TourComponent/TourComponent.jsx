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
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="tour-container">
      <Carousel
        arrows={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        customTransition="transform 600ms ease-in-out"
        transitionDuration={300}
        responsive={responsive}
      >
        <img src={tours.img_1} alt={tours.img_1} />
        <img src={tours.img_2} alt={tours.img_2} />
        <img src={tours.img_3} alt={tours.img_3} />
      </Carousel>
      <h1 className="tour-heading">{tours.title}</h1>
      <p className="tour-description">This tour offers the following:</p>
      <div className="tour-offers">
        <p className="tour-blog">{tours.tour_offer_1}</p>
        <p className="tour-blog">{tours.tour_offer_2}</p>
        <p className="tour-blog">{tours.tour_offer_3}</p>
        <p className="tour-blog">{tours.tour_offer_4}</p>
      </div>
    </div>
  );
};

export default TourComponent;
