// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ourTours } from "../../constants";

const ToursCarousel = () => {
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
    <div id="tours" className="carousel-tours__container">
      <h1 className="heading-primary">Tours we offer</h1>
      <div>
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
          keyBoardControl={true}
          className="carousel"
          dotListClass="custom-dot-list-style"
          responsive={responsive}
        >
          {ourTours.map((tour) => (
            <div key={tour.id} className="carousel-tour__container">
              <img
                src={tour.image}
                alt="tourImage"
                className="carousel-tour__image"
              />
              <h1 className="carousel-tour__heading">{tour.title}</h1>
              <p className="carousel-tour__description">{tour.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ToursCarousel;
