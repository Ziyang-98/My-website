import React from "react";
import Navbar from "components/Navbar";
import Home from "sections/HomeSection";
import About from "sections/AboutSection";
import Portfolio from "sections/PortfolioSection";
import Projects from "sections/ProjectsSection";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const styles = {
  container: {},
  paper: {
    width: "100%",
    minWidth: "100%",
    overflowX: "hidden",
  },
};

function App() {
  const [toggleDark, setToggleDark] = React.useState(false);

  const handleToggle = () => {
    setToggleDark(!toggleDark);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(
        ","
      ),
    },
    palette: {
      mode: toggleDark ? "dark" : "light",

      primary: {
        main: toggleDark ? "#7580e8" : "#3f51b5",
      },
      whiteColor: {
        main: toggleDark ? "#002984" : "#F7FCFC",
      },
      typography: {
        h2: {
          fontSize: 11,
        },
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={styles.container}>
          <Paper elevation={0} sx={styles.paper}>
            <Navbar />
            {/* <Home handleToggle={handleToggle} />
            <About />
            <Portfolio />
            <Projects /> */}
          </Paper>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
