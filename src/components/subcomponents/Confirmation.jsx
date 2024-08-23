import React from "react";

const Confirmation = ({ toBeConfirmed }) => {
  return (
    <div className="confirmation-container">
      <div className="confirm-left">
        <img
          src={toBeConfirmed.photo}
          alt={toBeConfirmed.name}
          className="confirm-image"
        />
        <h3 className="confirm-name">{toBeConfirmed.name}</h3>
      </div>
      <div className="cart-quantity">
        <input type="number" min="1" max="10" />
      </div>
    </div>
  );
};
export default Confirmation;
