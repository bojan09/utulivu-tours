import React from "react";
import "./Tours.css";

import { ToursCarousel } from "../../components";

const Tours = () => {
  return (
    <section id="tours">
      <div className="tours-container">
        <h1 className="tours__heading">
          Explore beautiful destinations and uncover the island's hidden gems
        </h1>
        <div className="tours-container__carousel">
          <ToursCarousel />
        </div>
      </div>
    </section>
  );
};

export default Tours;
