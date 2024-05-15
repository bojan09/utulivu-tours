// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ourTours from "../constants/Tours";

const CarouselGallery = () => {
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
    <div id="projects" className="my-[5rem]" data-aos="fade-down">
      <h1 className="text-center md:text-5xl xs:text-3xl my-6 font-rufina text-textColor">
        Our projects
      </h1>

      <div data-aos="fade-left">
        <Carousel
          swipeable={true}
          draggable={false}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .8"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel"
          responsive={responsive}
        >
          {ourTours.map((project) => (
            <div key={project.id} className="w-full p-4 md:pl-[2.3rem]">
              <img
                src={project.image}
                alt="projectImages"
                className="w-[400px] h-[400px] rounded-xl object-center object-fill"
              />
              <h1
                className="text-center my-5 font-rufina font-bold text-2xl text-textColor"
                data-aos="fade-right"
              >
                {project.title}
              </h1>
              <p
                className="text-center font-oxygen text-lg text-textColor pr-2"
                data-aos="fade-up"
              >
                {project.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselGallery;
