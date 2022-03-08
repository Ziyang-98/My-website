import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import Projects from "./Projects/Projects";
import Box from "@material-ui/core/Box";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
    // fontFamily: [
    //   "Nunito",
    //   "Roboto",
    //   "Helvetica Neue",
    //   "Arial",
    //   "sans-serif"
    // ].join(",")
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box flexDirection="column">
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Projects />
        </Box>
        {/* <Typography variant="h3">hello world</Typography> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
