import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#3f51b5",
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  toolbarTitle: {
    color: "#F7FCFC",
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
      margin: theme.spacing(1, 2),
    },
  },
  menuButton: {
    color: "#F7FCFC",
  },
  title: {
    color: "#F7FCFC",
    // fontWeight: 525,
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
        {matches && (
          <Toolbar className={classes.toolbar}>
            <div className={classes.links}>
              <Button size="large" className={classes.button}>
                <Link
                  className="toHome"
                  to="Home"
                  smooth={true}
                  duration={1000}
                >
                  Home
                </Link>
              </Button>
              <Button size="large" className={classes.button}>
                <Link
                  className="toAbout"
                  to="About"
                  smooth={true}
                  duration={1000}
                >
                  About
                </Link>
              </Button>
              <Button size="large" className={classes.button}>
                <Link
                  className="toPortfolio"
                  to="Portfolio"
                  smooth={true}
                  duration={1000}
                >
                  Portfolio
                </Link>
              </Button>
              <Button size="large" className={classes.button}>
                <Link
                  className="toProjects"
                  to="Projects"
                  smooth={true}
                  duration={1000}
                >
                  Projects
                </Link>
              </Button>
            </div>
          </Toolbar>
        )}
        {!matches && (
          <Toolbar>
            <Menu className={classes.menuButton} />
            <Typography variant="h6" className={classes.title}>
              Lim Zi Yang
            </Typography>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}
