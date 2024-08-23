import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const cart_container = document.querySelector("cart-container");
const showCart = document.getElementById("cart-btn");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/shades/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
