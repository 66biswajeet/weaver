import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";

import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Campaign from "./components/Campaign";
import Cardcomponent from "./components/Cardcomponent";
import Section2 from "./components/Section2";
import Partners from "./components/Partners";
import MobNav from "./components/Mobnav";
import Fund from "./components/Fund";
import Fund2 from "./components/Fund2";
import Footer from "./components/Footer";
import SocialRecognition from "./components/SocialRecognition";

import { useMediaQuery } from "react-responsive";

import Donation from "./components/Donation";

const AnimatedComponent = ({ children, animation }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const scale = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <>
      <Nav />
      <Section1 />
      <AnimatedComponent animation={slideRight}>
        <Section2 />
      </AnimatedComponent>
      <AnimatedComponent animation={slideLeft}>
        <Campaign />
      </AnimatedComponent>
      <AnimatedComponent animation={slideRight}>
        <Cardcomponent />
      </AnimatedComponent>
      <AnimatedComponent animation={slideUp}>
        <Partners />
      </AnimatedComponent>
      <AnimatedComponent animation={scale}>
        <Fund />
      </AnimatedComponent>
      <AnimatedComponent animation={slideRight}>
        <Donation />
      </AnimatedComponent>
      <AnimatedComponent animation={scale}>
        <Fund2 />
      </AnimatedComponent>
      <SocialRecognition />
      <Footer />

      {isMobile && <MobNav />}
    </>
  );
}

export default App;
