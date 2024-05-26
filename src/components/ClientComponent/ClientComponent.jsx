import React from "react";
import "./ClientComponent.css";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ourClients } from "../../constants";

const ClientComponent = () => {
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
    <div className="client_carousel">
      <h1 className="clients__heading">What our clients say about us</h1>
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
        {ourClients.map((client) => (
          <div key={client.id} className="client-carousel__container">
            <img className="client__img" src={client.image} alt={client.name} />
            <h4 className="client-name__container">{client.name}</h4>

            <p className="client__description">{client.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientComponent;
