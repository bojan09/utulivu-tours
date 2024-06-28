import "./ToursCarousel.css";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

import { ourTours } from "../../constants";

const ToursCarousel = () => {
  const responsive = {
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
    <div id="tours" className="carousel-tours">
      <div>
        <Carousel
          arrows={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          customTransition="transform 600ms ease-in-out"
          transitionDuration={300}
          responsive={responsive}
        >
          {ourTours.map((tour) => (
            <div key={tour.id} className="carousel__container">
              <Link to={`/tour/${tour.link}`}>
                <img
                  src={tour.img_1}
                  alt="tourImage"
                  className="carousel-tour__image"
                />
                <h1 className="carousel-tour__heading heading-primary">
                  {tour.title}
                </h1>
                <h3>{tour.tours}</h3>

                <p>{tour.tour_one_description}</p>
                <p className="carousel-tour__description">{tour.description}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ToursCarousel;
