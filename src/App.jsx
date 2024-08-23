import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "/src/components/Nav";
import Footer from "/src/components/Footer";
import Home from "/src/pages/Home";
import Shop from "/src/pages/Shop";
import About from "/src/pages/About";
import ScrollToTop from "/src/components/ScrollToTop";
// import Cart from "/src/components/Cart";
import NotFound from "/src/pages/NotFound";
import Terms from "/src/pages/Terms";
import Contact from "/src/pages/Contact";
import "/src/styles/index.css";
import "/src/styles/Footer.css";
import "/src/styles/FooterForm.css";
// import "/src/styles/Cart.css";
import "/src/styles/Nav.css";
import "/src/styles/Home.css";
import "/src/styles/Shop.css";
import "/src/styles/About.css";
import "/src/styles/Checkout.css";
import "/src/styles/Contact.css";

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
        <Route path="/shades/" element={<Home />} />
        <Route path="/shades/shop" element={<Shop />} />
        <Route path="/shades/about" element={<About />} />
        <Route path="/shades/contact-us" element={<Contact />} />
        <Route path="/shades/terms" element={<Terms />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
