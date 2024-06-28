import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <h1 className="footer-heading">
        Join us for an adventure that will leave you with memories to last a
        lifetime. <br /> <br />
        Book your tour today and start your journey to paradise!
        <br />
      </h1>

      <div className="footer-container">
        <a href="mailto:utulivu@tours.com" className="footer-email">
          <b>Email:</b> utulivu@tours.com
        </a>
        <br />
        <br />
        <a href="tel:+55 505 005" className="footer-email">
          <b>Phone:</b> + 55 505 005
        </a>
      </div>
    </section>
  );
};

export default Footer;
