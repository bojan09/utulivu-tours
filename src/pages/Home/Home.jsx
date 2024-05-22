import React from "react";
import "./Home.css";

// assets
import { home_img__1, home_img__2 } from "../../assets";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-left">
          <h1 className="home__heading">
            Experience <b>Zanzibar</b> where beaches and rich cultural heritage
            await to enchant your senses.
          </h1>
          <p className="home__paragarph">
            Whether you're seeking a thrilling safari in the heart of Africa, a
            serene beach getaway, or a deep dive into local traditions, our
            dedicated team is here to make your dream vacation a reality.
          </p>
          <button className="home__button button">Book now</button>
        </div>
        <div className="home-right">
          <img
            className="home-img home-img__one"
            src={home_img__1}
            alt="home_img_1"
          />
          <img
            className="home-img home-img__two"
            src={home_img__2}
            alt="home_img_1"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
