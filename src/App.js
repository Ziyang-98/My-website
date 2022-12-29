import React from "react";
import Navbar from "components/Navbar";
import Home from "sections/HomeSection";
import About from "sections/AboutSection";
import Portfolio from "sections/PortfolioSection";
import Projects from "sections/ProjectsSection";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {},
  paper: {
    width: "100%",
    minWidth: "100%",
    overflowX: "hidden",
  },
}));

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
      type: toggleDark ? "dark" : "light",

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

  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box className={classes.container}>
          <Paper elevation={0} className={classes.paper}>
            <Navbar />
            <Home handleToggle={handleToggle} />
            <About />
            <Portfolio />
            <Projects />
          </Paper>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
