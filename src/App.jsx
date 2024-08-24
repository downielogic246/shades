import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
// import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import "./styles/index.css";
import "./styles/Footer.css";
import "./styles/FooterForm.css";
// import "./styles/Cart.css";
import "./styles/Nav.css";
import "./styles/Home.css";
import "./styles/Shop.css";
import "./styles/About.css";
import "./styles/Checkout.css";
import "./styles/Contact.css";

const shop = [
  {
    id: 1,
    photo: " ",
    name: `"Danca"`,
    quantity: 1,
    cost: 120.99,
  },
];

function App() {
  const [totalCosts, setTotalCosts] = useState(0);
  const [cartItems, setCartItems] = useState(() => {
    const localValue = localStorage.getItem("CART");

    return localValue === null ? [] : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cartItems));
    setTotalCosts(calculateTotalCosts());
  }, [cartItems]);

  function addToCart(added_to_cart) {
    let found = false;

    cartItems.forEach((items) => {
      if (added_to_cart.id === items.id) found = true;
    });

    if (found == false) {
      setCartItems((current_cart) => {
        return [
          ...current_cart,
          {
            id: added_to_cart.id,
            name: added_to_cart.name,
            cost: added_to_cart.cost,
            photo: added_to_cart.photo,
            confirmed: false,
          },
        ];
      });
    } else if (found == true) {
      window.alert("Item already in cart!");
    }
  }

  function calculateTotalCosts() {
    let total = 0;

    cartItems.map((item) => {
      total = total + item.cost * item.quantity;
    });

    return total;
  }

  function deleteFromCart(id) {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
