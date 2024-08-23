import React from "react";
import FooterForm from "./subcomponents/FooterForm";
import logo_MD from "../assets/MD_logo.svg";
// import logo_NAME from "../assets/Downie_Name.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img src={logo_MD} alt="logo" height="100%" />
        {/* <img src={logo_NAME} alt="logo" /> */}
      </div>
      <div className="footer_centre">
        <div className="follow_us">
          <h3 className="footer_heading follow_us_heading">follow us</h3>
          <div className="social_links">
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="lets_help">
          <h3 className="footer_heading lets_help_heading">let's help</h3>
          <Link className="help_links" to="/shades/about">
            about us
          </Link>
          <Link className="help_links" to="/shades/shop">
            see our options
          </Link>
          <Link className="help_links" to="/shades/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
      <FooterForm />
      <div className="terms_and_faq">
        <Link className="help_links" to="/shades/terms">
          terms & conditions
        </Link>
      </div>
      <div className="copyright">
        &copy; MD Shades 2024. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
