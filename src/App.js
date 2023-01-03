import React from "react";
import Navbar from "components/Navbar";
import Home from "sections/HomeSection";
import About from "sections/AboutSection";
import Portfolio from "sections/PortfolioSection";
// import Projects from "sections/ProjectsSection";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "common/theme";

const styles = {
  container: {},
  paper: {
    width: "100%",
    minWidth: "100%",
    overflowX: "hidden",
    bgcolor: "background.main",
  },
};

function App() {
  const [toggleDark, setToggleDark] = React.useState(false);

  const handleToggle = () => {
    setToggleDark(!toggleDark);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={toggleDark ? darkTheme : lightTheme}>
        <Box sx={styles.container}>
          <Paper elevation={0} sx={styles.paper}>
            <Navbar />
            <Home handleToggle={handleToggle} />
            <About />
            <Portfolio />
            {/* <Projects /> */}
          </Paper>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
