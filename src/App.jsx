import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Mobnav from "./components/Mobnav";
import { useMediaQuery } from "react-responsive";
import Redirect1 from "./components/Redirect1";
import Csr from "./components/Csr";
import Payment from "./components/Payment";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  return (
    <>
      <Router>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirect" element={<Redirect1 />} />
          <Route path="/csr" element={<Csr />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
        {isMobile && <Mobnav />}
      </Router>
    </>
  );
};

export default App;
