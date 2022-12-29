import React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/Info";
import PortfolioIcon from "@mui/icons-material/AccountBox";
import ProjectsIcon from "@mui/icons-material/EmojiObjects";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-scroll";

const useStyles = (theme) => ({
  root: {},
  appBar: {
    borderBottom: `1px solid ${theme.palette.Boxider}`,
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  links: {},
  button: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    color: "#F7FCFC",
    "&:hover": {
      backgroundColor: "#9AA7F7",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#9AA7F7",
      borderColor: "#005cbf",
    },
    margin: "8px 64px",
    [theme.breakpoints.down("md")]: {
      margin: "8px 24px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "8px 18px",
    },
  },
  title: {
    color: theme.palette.whiteColor.main,
  },
  icon: {
    color: theme.palette.whiteColor.main,
  },
});

export default function DenseAppBar() {
  const theme = useTheme();
  const styles = useStyles(theme);
  const desktopVP = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={styles.root}>
      <AppBar position="fixed" color="default" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {desktopVP && (
            <Box sx={styles.links}>
              <Link className="toHome" to="Home" smooth={true} duration={1000}>
                <Button size="large" sx={styles.button}>
                  <Typography sx={styles.title} variant="button">
                    Home
                  </Typography>
                </Button>
              </Link>

              <Link
                className="toAbout"
                to="About"
                smooth={true}
                duration={1000}
              >
                <Button size="large" sx={styles.button}>
                  <Typography sx={styles.title} variant="button">
                    About
                  </Typography>
                </Button>
              </Link>

              <Link
                className="toPortfolio"
                to="Portfolio"
                smooth={true}
                duration={1000}
              >
                <Button size="large" sx={styles.button}>
                  <Typography sx={styles.title} variant="button">
                    Portfolio
                  </Typography>
                </Button>
              </Link>

              <Link
                className="toProjects"
                to="Projects"
                smooth={true}
                duration={1000}
              >
                <Button size="large" sx={styles.button}>
                  <Typography sx={styles.title} variant="button">
                    Projects
                  </Typography>
                </Button>
              </Link>
            </Box>
          )}
          {!desktopVP && (
            <Box sx={styles.links}>
              <Link className="toHome" to="Home" smooth={true} duration={1000}>
                <Tooltip
                  title="Home"
                  TransitionComponent={Zoom}
                  enterTouchDelay="50"
                >
                  <IconButton aria-label="toHome" sx={styles.button}>
                    <HomeIcon sx={styles.icon} />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link
                className="toAbout"
                to="About"
                smooth={true}
                duration={1000}
              >
                <Tooltip
                  title="About"
                  TransitionComponent={Zoom}
                  enterTouchDelay="50"
                >
                  <IconButton aria-label="toAbout" sx={styles.button}>
                    <AboutIcon sx={styles.icon} />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link
                className="toPortfolio"
                to="Portfolio"
                smooth={true}
                duration={1000}
              >
                <Tooltip
                  title="Portfolio"
                  TransitionComponent={Zoom}
                  enterTouchDelay="50"
                >
                  <IconButton aria-label="toPortfolio" sx={styles.button}>
                    <PortfolioIcon sx={styles.icon} />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link
                className="toProjects"
                to="Projects"
                smooth={true}
                duration={1000}
              >
                <Tooltip
                  title="Projects"
                  TransitionComponent={Zoom}
                  enterTouchDelay="50"
                >
                  <IconButton aria-label="toProjects" sx={styles.button}>
                    <ProjectsIcon sx={styles.icon} />
                  </IconButton>
                </Tooltip>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
