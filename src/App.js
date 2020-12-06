import React from "react";
import Tabbar from "./Tabbar/Tabbar";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Tabbar /> */}
      <Home />
      <About />
      <Portfolio />
      <Projects />
    </div>
  );
}

export default App;
