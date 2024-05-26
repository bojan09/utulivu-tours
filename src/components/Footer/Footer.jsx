import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <h1 className="footer-heading">
        Your dream Zanzibar experience starts here.
      </h1>

      <div className="footer-container">
        <a href="mailto:utulivu@tours.com" className="footer-email">
          Email: utulivu@tours.com
        </a>
        <br />
        <a href="tel:+55 505 005" className="footer-email">
          Phone: +55 505 005
        </a>
      </div>
    </section>
  );
};

export default Footer;
