import "./App.css";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Campaign from "./components/Campaign";
import Cardcomponent from "./components/Cardcomponent";
import Section2 from "./components/Section2";
import MobNav from "./components/Mobnav";
import { useMediaQuery } from "react-responsive";
import { createGlobalStyle } from "styled-components";
// import "./css/App.css";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <>
      <Nav />
      <Section1 />
      <Section2 />
      <Campaign />
      <Cardcomponent />
      milan typing
      {isMobile && <MobNav />}
    </>
  );
}

export default App;
