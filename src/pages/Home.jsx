import React, { useState } from "react";

import { Link } from "react-router-dom";

import backdropImage from "src/assets/our_story_background.jpg";
import dancaImage1 from "src/assets/THREE_STACKED_FINAL.jpg";
import dancaImage2 from "src/assets/THREE_STACKED_ONE_SIDE_FINAL.jpg";
import dancaImage3 from "src/assets/SIDE_FINAL.jpg";

import ceoImage1 from "src/assets/CLOSED_FINAL.jpg";
import ceoImage2 from "src/assets/DOUBLE_CLOSED_FINAL.jpg";
import ceoImage3 from "src/assets/DOUBLE_CLOSED_WITH_CASE_FINAL.jpg";
import ceoImage4 from "src/assets/OPENED._FINALjpg.jpg";

import studio_photo1 from "src/assets/marlon_machel_main_background.jpg";
import studio_photo2 from "src/assets/marlon_only_background.jpg";

const Home = () => {
  const ceoImages = [ceoImage1, ceoImage2, ceoImage3, ceoImage4];

  const dancaImages = [dancaImage1, dancaImage2, dancaImage3];

  const featured = [studio_photo1, studio_photo2];

  const [slideImage, setSlideImage] = useState(0);

  const leftSlide = (x) => {
    x--;
    setSlideImage(x < 0 ? featured.length - 1 : x);
  };
  const rightSlide = (x) => {
    x++;
    setSlideImage(x > featured.length - 1 ? 0 : x);
  };

  const [checkoutScreen, setCheckoutScreen] = useState("none");

  return (
    <>
      <section
        className="page home"
        style={{
          backgroundImage: `url(${featured[slideImage]})`,
          backgroundAttachment: "local",
          backgroundSize: "cover ",
        }}
      >
        <button
          className="left-slide"
          onClick={() => {
            leftSlide(slideImage);
          }}
        >
          &lt;
        </button>
        <button
          className="right-slide"
          onClick={() => {
            rightSlide(slideImage);
          }}
        >
          {" "}
          &gt;{" "}
        </button>

        <div className="home-text">
          <h3>Featured</h3>
          <h3>"C E O"</h3>
          <article>Feel like the boss,</article>
          <article>Look like the boss</article>

          <Link className="slide_shop" to="/shop">
            shop now
          </Link>
        </div>
      </section>
      <section className="page shop-now">
        <div className="shop_now-container">
          <div className="series-container">
            <div
              className="series"
              style={{
                backgroundImage: `url(${dancaImage1})`,
              }}
            >
              <h3>"d a n c a"</h3>
              <Link className="series-shop" to="/shop">
                order now
              </Link>
            </div>
            <div
              className="series"
              style={{
                backgroundImage: `url(${ceoImage4})`,
              }}
            >
              <h3>"c e o"</h3>
              <Link
                className="series-shop"
                onClick={() => {
                  console.log("scroll to top");
                }}
                to="/shop"
              >
                order now
              </Link>
            </div>
          </div>
          <div className="shop_now_heading-container">
            <div className="shop_now_heading-title">
              <h3>shop now</h3>
            </div>
            <div className="shop_now_heading-desc">
              <article>
                Take a look at our collection. Let's make a statement.
              </article>
            </div>
          </div>
        </div>
      </section>
      <section
        className="page about-us"
        style={{
          backgroundImage: `url(${backdropImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="about_us-container">
          <h2>our story</h2>
          <article>"Simple, Stylish and Perfectly Complete..."</article>
          <div className="about_btn-container">
            <Link className="home-about" to="/about">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
