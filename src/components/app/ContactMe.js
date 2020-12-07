import React from "react";

const ContactMe = () => (
  <main className="contactMe">
    <section id="contactTitle">
      <span className="strong">Contact Me</span>
    </section>
    <section id="email" className="contactMeDetails">
      <i className="fa fa-envelope" aria-hidden="true"></i>
      <a href="mailto:mo22doc@gmail.com">mo22doc@gmail.com</a>
    </section>
    <section id="phone" className="contactMeDetails">
      <i className="fa fa-phone" aria-hidden="true"></i>
      <a href="tel:+3039468405">3035948486</a>
    </section>
    <section id="address" className="contactMeDetails">
      <i className="fa fa-map-marker" aria-hidden="true"></i>
      Denver, CO
    </section>
  </main>
);

export default ContactMe;
