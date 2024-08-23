import { React, useEffect, useRef, useState } from "react";
// import Checkout from "src/components/Checkout";
import dancaImage1 from "src/assets/THREE_STACKED_FINAL.jpg";
import dancaImage2 from "src/assets/THREE_STACKED_ONE_SIDE_FINAL.jpg";
import dancaImage3 from "src/assets/WITH_CASE_FINAL.jpg";
import dancaImage4 from "src/assets/SIDE_FINAL.jpg";
import ceoImage1 from "src/assets/OPENED._FINALjpg.jpg";
import ceoImage2 from "src/assets/CLOSED_FINAL.jpg";
import ceoImage3 from "src/assets/DOUBLE_CLOSED_FINAL.jpg";
import ceoImage4 from "src/assets/DOUBLE_CLOSED_WITH_CASE_FINAL.jpg";

import { useForm, ValidationError } from "@formspree/react";

const Shop = () => {
  const [toCheckout, setToCheckout] = useState({
    name: "",
    cost: 0,
    photo: "",
    showCheckout: "none",
  });

  const [showConfirmation, setShowConfirmation] = useState("none");

  const [orderName, setOrderName] = useState();
  const [orderEmail, setOrderEmail] = useState();
  const [orderContact, setOrderContact] = useState();
  const [orderQuantity, setOrderQuantity] = useState();

  const [showUnsuccess, setShowUnsuccess] = useState({
    display: "none",
    content: "",
  });

  const [state, handleSubmit] = useForm("xqazylrr");

  const checkout = useRef();
  const continue_btn = useRef();
  const cancel_btn = useRef();
  const checkout_heading = useRef();

  useEffect(() => {
    if (localStorage.getItem("orderCompleted")) {
      document.querySelector(".e-mail-message_container").style.bottom = 0;

      localStorage.removeItem("orderCompleted");
    }
  }, []);

  return (
    <section className="page shop">
      <h2>shop</h2>
      <div className="product-section">
        <div className="details">
          <h3>"d a n c a"</h3>
          <article>BBD$80.00</article>
          <button
            onClick={() => {
              setToCheckout({
                name: "D A N C A",
                cost: 80,
                photo: dancaImage1,
                showCheckout: "flex",
              });
              // addToCart(item);
            }}
          >
            order now
          </button>
        </div>
        <div className="series_shop-container">
          <div className="series-item">
            <img src={dancaImage4} alt="DANCA" />
            <img src={dancaImage1} alt="DANCA" />
            <img src={dancaImage2} alt="DANCA" />
            <img src={dancaImage3} alt="DANCA" />
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="details">
          <h3>"c e o"</h3>
          <article>BBD$90.00</article>
          <button
            onClick={() => {
              setToCheckout({
                name: "C E O",
                cost: 90,
                photo: ceoImage1,
                showCheckout: "flex",
              });
            }}
          >
            order now
          </button>
        </div>
        <div className="series_shop-container">
          <div className="series-item">
            <img src={ceoImage4} alt="DANCA" />
            <img src={ceoImage1} alt="DANCA" />
            <img src={ceoImage2} alt="DANCA" />
            <img src={ceoImage3} alt="DANCA" />
          </div>
        </div>
      </div>
      <div
        className="checkout-container"
        style={{
          display: toCheckout.showCheckout,
        }}
      >
        <div className="checkout-heading" ref={checkout_heading}>
          <h3>checkout</h3>
        </div>
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="checkout-info" ref={checkout}>
            <input type="text" name="product" value={toCheckout.name} hidden />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={orderName}
              onChange={(e) => {
                setOrderName(e.target.value);
              }}
              required
            />
            <label className="form_label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={orderEmail}
              required
              onChange={(e) => {
                setOrderEmail(e.target.value);
              }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="form_label" htmlFor="email">
              Email
            </label>
            <input
              type="tel"
              id="contact"
              name="contact number"
              placeholder="Contact Number"
              required
              value={orderContact}
              onChange={(e) => {
                setOrderContact(e.target.value);
              }}
            />
            <label className="form_label" htmlFor="contact">
              Contact
            </label>

            <input type="text" value={`"` + toCheckout.name + `"`} hidden />

            <input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              max="5"
              value={orderQuantity}
              onChange={(e) => {
                setOrderQuantity(e.target.value);
              }}
            />
            <label htmlFor="quantity" className="form_label">
              Quantity
            </label>
            <select name="collection" id="collection">
              <option value="Choose">Choose mode of collection</option>
              <option value="delivery" required>
                Delivery
              </option>
              <option value="pick_up" required>
                Pick-up
              </option>
            </select>
          </div>
          <div ref={continue_btn}>
            <button
              type="button"
              className="continue-btn"
              onClick={() => {
                if (
                  orderName != undefined &&
                  orderEmail != undefined &&
                  orderContact != undefined &&
                  orderQuantity !== undefined
                ) {
                  if (document.getElementById("collection").value == "Choose") {
                    alert(
                      "Please check personal details again and ensure that everything is completed including the mode of collection"
                    );
                  } else {
                    setShowConfirmation("flex");
                    checkout.current.style.display = "none";
                    cancel_btn.current.style.display = "none";
                    continue_btn.current.style.display = "none";
                    checkout_heading.current.style.display = "none";
                  }
                }
              }}
            >
              &#10140;
            </button>
          </div>
          <div ref={cancel_btn}>
            <button
              className="cancel-btn"
              type="reset"
              onClick={() => {
                setToCheckout({
                  name: undefined,
                  cost: 80,
                  photo: undefined,
                  showCheckout: "none",
                });
              }}
            >
              &#10006;
            </button>
          </div>
          <div className="confirmation" style={{ display: showConfirmation }}>
            <h3 className="confirm-heading">Please confirm order</h3>
            <div className="display_order">
              <div
                style={{
                  backgroundImage: `url(${toCheckout.photo})`,
                  width: "115px",
                  height: "115px",
                  backgroundSize: "contain",
                  borderRadius: "100%",
                }}
              ></div>
              <div>
                {/* <h4>{`"` + toCheckout.name + `"`}</h4> */}
                <ul>
                  <li>Name: {orderName}</li>
                  <li>Email: {orderEmail}</li>
                  <li>Contact Number : {orderContact}</li>
                </ul>
                <article>
                  {"Total: BBD$" + toCheckout.cost * orderQuantity + ".00"}
                </article>
              </div>
            </div>

            <div className="proceed">
              <button
                disabled={state.submitting}
                onClick={() => {
                  if (!state.succeeded) {
                    setShowUnsuccess({
                      display: "block",
                      content:
                        "Sorry, your order was not successful. Please try again.",
                    });
                  } else {
                    window.localStorage.setItem("orderCompleted", true);
                    window.location.reload();
                  }
                }}
              >
                &#10004;
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmation("none");
                  checkout.current.style.display = "flex";
                  cancel_btn.current.style.display = "block";
                  continue_btn.current.style.display = "block";
                  checkout_heading.current.style.display = "flex";
                }}
              >
                &#10006;
              </button>
              <div className="unsuccess">{showUnsuccess.content}</div>
            </div>
          </div>
        </form>
      </div>
      <div className="e-mail-message_container">
        <div className="thanks-module">
          <button
            type="button"
            onClick={() => {
              document.querySelector(".e-mail-message_container").style.bottom =
                "100%";
            }}
          >
            &#10006;
          </button>
          <p>
            Thank you so much for placing your order! Look out for an e-mail or
            phone call within the next 24-hours to confirm your order. Happy
            shopping!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shop;
