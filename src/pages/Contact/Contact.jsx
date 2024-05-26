import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="contact-heading">
        Join us for an adventure that promises tranquility, discovery, and
        lasting memories.
      </h1>
      <form className="contact-container" ref={form} onSubmit={sendEmail}>
        <h1 className="contact-container__heading">Contact us</h1>
        <label className="contact-name__label">Name</label>
        <input className="contact-name__input" type="text" name="user_name" />
        <label className="contact-email__label">Email</label>
        <input
          className="contact-email__input"
          type="email"
          name="user_email"
        />
        <label className="contact-message__label">Message</label>
        <textarea className="contact-message__textarea" name="message" />
        <input className="contact-button" type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
