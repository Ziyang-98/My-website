import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import Projects from "./Projects/Projects";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <React.Fragment>
      <Box flexDirection="column">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Projects />
      </Box>
    </React.Fragment>
  );
}

export default App;
