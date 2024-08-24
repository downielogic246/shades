import React from "react";
import CEO from "../assets/marlon_only.jpg";

const About = () => {
  return (
    <section className="page about">
      <h2>about us</h2>
      <div className="aboutUs_container">
        <img src={CEO} alt="Image of owner" />
        <div className="aboutUs">
          <h3>"Simple, Stylish and Perfectly Complete"</h3>
          <article>
            Welcome to our small startup based in the vibrant island of
            Barbados, where simplicity meets style. Founded by a passionate
            individual with a love for all things fashionable, we believe in the
            beauty of keeping things simple. Our ethos revolves around the idea
            that elegance doesn't need to be complicated. From clothing to
            accessories, we strive to offer designs that are both chic and
            understated, reflecting the laid-back charm of our Caribbean roots.
            At our core, we're not just about following trends; we're about
            curating pieces that effortlessly enhance your personal style. Join
            us on this journey where one simple accessory reigns supreme, and
            fashion is a celebration of individuality.
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
