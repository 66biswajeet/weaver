import "./App.css";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Cardcomponent from "./components/Cardcomponent";
import Section2 from "./components/Section2";
import MobNav from "./components/Mobnav";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <>
      <Nav />
      <Section1 />
      <Section2 />
      <Cardcomponent />
      <Footer />
      {isMobile && <MobNav />}
    </>
  );
}

export default App;
