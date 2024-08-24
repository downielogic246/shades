import { React } from "react";
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

function App() {
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
