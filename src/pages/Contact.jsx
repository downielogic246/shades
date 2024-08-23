import React from "react";

const Phone = () => {
  return (
    <div className="phone">
      <div className="screen-outer">
        <div className="screen-inner">
          <div className="notch">
            <div className="speaker"></div>
            <div className="camera"></div>
            <div className="vol-up"></div>
            <div className="vol-down"></div>
            <div className="power"></div>
          </div>
          <ul className="socialMedia">
            <li>
              <a
                href="https://instagram.com/chaunies246?igshid=MTg0ZDhmNDA="
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
                <h2>Instagram</h2>
              </a>
            </li>
            <li>
              <a href="wa.link/9mc4s6" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
                <h2>Whatsapp</h2>
              </a>
            </li>
            <li>
              <a href="mailto:marlondownie.business@gmail.com ? subject=Ask MD">
                <i className="fa-regular fa-envelope"></i>
                <h2>Email</h2>
              </a>
            </li>
            <li>
              <a href="tel:+12462387978">
                <i className="fa-sharp fa-solid fa-phone"></i>
                <h2>Phone</h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <>
      <section
        className="page"
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <h2>contact us</h2>
        <section className="contact-container">
          <div className="chaunies-contact">
            <Phone />
            {/* <div className="contact-questions">
              <h3>FAQ</h3>
              <li className="question">
                <h4 className="question-heading">
                  <i className="fa-solid fa-circle-question"></i>
                  How do you get a special order?
                </h4>
                <article className="question-response">
                  Special orders can be done over the phone,via email or by
                  contacting us on any of the socials listed.
                </article>
              </li>
              <li className="question">
                <h4 className="question-heading">
                  <i className="fa-solid fa-circle-question"></i>What do you
                  offer with your special orders?
                </h4>
                <article className="question-response">
                  Special orders can come however you want them. Any particular
                  shape of sandwich, colours or even type of bread.
                </article>
              </li>
              <li className="question">
                <h4 className="question-heading">
                  <i className="fa-solid fa-circle-question"></i>Does delivery
                  increment the total order cost?
                </h4>
                <article className="question-response">
                  No. Delivery does not on any extra to the final cost.
                </article>
              </li>
            </div> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
