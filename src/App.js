import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import Projects from "./Projects/Projects";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Projects />
    </React.Fragment>
  );
}

export default App;
