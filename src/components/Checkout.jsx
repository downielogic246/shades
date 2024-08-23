import React, { useRef } from "react";

const Checkout = ({ name, cost, photo, showCheckout }) => {
  const checkout_box = useRef();
  return (
    <div
      className="checkout-container"
      style={{
        display: { showCheckout },
      }}
      ref={checkout_box}
    >
      <div className="cart-heading">
        <h3>checkout</h3>
      </div>
      <form action="" method="get">
        <div className="checkout-info">
          <input type="text" id="name" required />
          <label htmlFor="name">Name</label>
          <input type="text" id="email" placeholder="Email Address" required />
          <label htmlFor="email">Email</label>
          <select name="collection" id="collection">
            <option value="delivery">delivery</option>
            <option value="pick_up">pick-up</option>
          </select>
        </div>
      </form>
      <div>
        <button type="submit">continue</button>
      </div>
      <div>
        <button
          type="reset"
          onClick={() => {
            checkout_box.current.style.display = "none";
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Checkout;
