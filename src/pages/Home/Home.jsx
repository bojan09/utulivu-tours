import React from "react";
import "./Home.css";

// assets
import home_img__1 from "../../assets/home_img__1.jpg";
import home_img__2 from "../../assets/home_img__2.jpg";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-left">
          <h1>Experience Zanzibar like never before and get a better taste</h1>
          <p>
            Whether you're seeking a thrilling safari in the heart of Africa, a
            serene beach getaway, or a deep dive into local traditions, our
            dedicated team is here to make your dream vacation a reality.
          </p>
          <button>Book now</button>
        </div>
        <div className="home-right">
          <img className="home-img" src={home_img__1} alt="home_img_1" />
          <img className="home-img" src={home_img__2} alt="home_img_1" />
        </div>
      </div>
    </section>
  );
};

export default Home;
