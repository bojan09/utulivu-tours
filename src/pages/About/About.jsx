import "./About.css";

// assets
import { heading_icon } from "../../assets";

const About = () => {
  return (
    <section id="about">
      <h1 className="about-heading">
        Experience the Magic of Zanzibar with
        <span className="about-heading__icon"> Utulivu Tours</span>
        <img
          src={heading_icon}
          alt="heading-icon"
          className="about-heading__icon-img"
        />
      </h1>
    </section>
  );
};

export default About;
