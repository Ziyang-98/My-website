import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Info";
import PortfolioIcon from "@material-ui/icons/AccountBox";
import ProjectsIcon from "@material-ui/icons/EmojiObjects";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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
    margin: theme.spacing(1, 8),
    [theme.breakpoints.down("sm")]: {
      // minWidth: 150,
      margin: theme.spacing(1, 3),
    },
    [theme.breakpoints.down("xs")]: {
      // minWidth: 100,
      margin: theme.spacing(1, 1),
    },
  },
  title: {
    color: theme.palette.whiteColor.main,
    // "#F7FCFC",
    // fontWeight: 525,
  },
  icon: {
    color: theme.palette.whiteColor.main,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          {matches && (
            <div className={classes.links}>
              <Link className="toHome" to="Home" smooth={true} duration={1000}>
                <Button size="large" className={classes.button}>
                  <Typography className={classes.title} variant="button">
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
                <Button size="large" className={classes.button}>
                  <Typography className={classes.title} variant="button">
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
                <Button size="large" className={classes.button}>
                  <Typography className={classes.title} variant="button">
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
                <Button size="large" className={classes.button}>
                  <Typography className={classes.title} variant="button">
                    Projects
                  </Typography>
                </Button>
              </Link>
            </div>
          )}
          {!matches && (
            <div className={classes.links}>
              <Link className="toHome" to="Home" smooth={true} duration={1000}>
                <Tooltip
                  title="Home"
                  TransitionComponent={Zoom}
                  enterTouchDelay="50"
                >
                  <IconButton aria-label="toHome" className={classes.button}>
                    <HomeIcon className={classes.icon} />
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
                  <IconButton aria-label="toAbout" className={classes.button}>
                    <AboutIcon className={classes.icon} />
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
                  <IconButton
                    aria-label="toPortfolio"
                    className={classes.button}
                  >
                    <PortfolioIcon className={classes.icon} />
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
                  <IconButton
                    aria-label="toProjects"
                    className={classes.button}
                  >
                    <ProjectsIcon className={classes.icon} />
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
