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
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="tour-container">
      <Carousel
        arrows={true}
        removeArrowOnDeviceType={["mobile"]}
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
        <img className="tour-image" src={tours.img_4} alt={tours.img_4} />
        <img className="tour-image" src={tours.img_5} alt={tours.img_5} />
        <img className="tour-image" src={tours.img_6} alt={tours.img_6} />
        <img className="tour-image" src={tours.img_7} alt={tours.img_7} />
      </Carousel>

      <div className="tour-info_container">
        <h1 className="tour-heading">{tours.title}</h1>
        <p className="tour-description">This tour offers the following:</p>
        <div className="tour-offers">
          <div className="tour_one">
            <h1 className="tour-description_heading">
              {tours.tour_one_heading}
            </h1>
            <p className="tour-blog">{tours.tour_one_description_part_one}</p>
            <p className="tour-blog">{tours.tour_one_description_part_two}</p>
            <p className="tour-blog">{tours.tour_one_description_part_three}</p>
            <p className="tour-blog">{tours.tour_one_description_part_four}</p>
            <p className="tour-blog">{tours.tour_one_description_part_five}</p>
          </div>
          <div className="tour_two">
            <h1 className="tour-description_heading">
              {tours.tour_two_heading}
            </h1>
            <p className="tour-blog">{tours.tour_two_description_part_one}</p>
            <p className="tour-blog">{tours.tour_two_description_part_two}</p>
            <p className="tour-blog">{tours.tour_two_description_part_three}</p>
            <p className="tour-blog">{tours.tour_two_description_part_four}</p>
          </div>
          <div className="tour_three">
            <h1 className="tour-description_heading">
              {tours.tour_three_heading}
            </h1>
            <p className="tour-blog">{tours.tour_three_description_part_one}</p>
            <p className="tour-blog">{tours.tour_three_description_part_two}</p>
            <p className="tour-blog">
              {tours.tour_three_description_part_three}
            </p>
            <p className="tour-blog">
              {tours.tour_three_description_part_four}
            </p>
          </div>

          <div className="tour_four">
            <h1 className="tour-description_heading">
              {tours.tour_four_heading}
            </h1>
            <p className="tour-blog">{tours.tour_four_description_part_one}</p>
            <p className="tour-blog">{tours.tour_four_description_part_two}</p>
            <p className="tour-blog">
              {tours.tour_four_description_part_three}
            </p>
            <p className="tour-blog">{tours.tour_four_description_part_four}</p>
            <p className="tour-blog">
              {tours.tour_four_description_part_three}
            </p>
            <p className="tour-blog">{tours.tour_four_description_part_four}</p>
          </div>

          <div className="tour_five">
            <h1 className="tour-description_heading">
              {tours.tour_five_heading}
            </h1>
            <p className="tour-blog">{tours.tour_five_description_part_one}</p>
            <p className="tour-blog">{tours.tour_five_description_part_two}</p>
            <p className="tour-blog">
              {tours.tour_five_description_part_three}
            </p>
            <p className="tour-blog">{tours.tour_five_description_part_four}</p>
            <p className="tour-blog">
              {tours.tour_five_description_part_three}
            </p>
            <p className="tour-blog">{tours.tour_five_description_part_four}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourComponent;
