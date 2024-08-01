import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Mobnav from "./components/Mobnav";
import { useMediaQuery } from "react-responsive";
import Redirect1 from "./components/Redirect1";


const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirect" element={<Redirect1 />} />
        </Routes>
        <Footer />
        {isMobile && <Mobnav />}
      </Router>
    </>
  );
};

export default App;
