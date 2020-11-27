import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-scroll";
import Menu from "./Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appbar: {
    // backgroundColor: "#e1f5fe",
  },
  // root: {
  //   // position: "fixed",
  //   flexGrow: 1,
  //   top: 0,
  //   width: "100%",
  //   // backgroundColor: "#e1f5fe",
  //   zIndex: 2,
  //   // display: "flex",
  //   // justifyContent: "center",
  //   // alignItems: "center",
  // },
  tab: {
    // minWidth: 200,
    width: 200,

    [theme.breakpoints.down("sm")]: {
      // minWidth: 150,
      width: 150,
    },
    [theme.breakpoints.down("xs")]: {
      // minWidth: 100,
      width: 100,
    },
  },
  text: {
    // color: "white",
  },
  menuButton: {
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    // fontWeight: 525,
  },
}));

function Tabbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.appbar} position="fixed">
      {matches && (
        <Tabs
          className={classes.root}
          value={value}
          onChange={handleChange}
          indicatorColor="inherit"
          textColor="primary"
          centered
        >
          <Link className="toHome" to="Home" smooth={true} duration={1000}>
            <Tab
              className={classes.tab}
              label={<div className={classes.text}>Home</div>}
            />
          </Link>
          <Link className="toAbout" to="About" smooth={true} duration={1000}>
            <Tab
              className={classes.tab}
              label={<div className={classes.text}>About</div>}
            />
          </Link>
          <Link
            className="toPortfolio"
            to="Portfolio"
            smooth={true}
            duration={1000}
          >
            <Tab
              className={classes.tab}
              label={<div className={classes.text}>Portfolio</div>}
            />
          </Link>
          <Link
            className="toProjects"
            to="Projects"
            smooth={true}
            duration={1000}
          >
            <Tab
              className={classes.tab}
              label={<div className={classes.text}>Projects</div>}
            />
          </Link>
          {/* <Box
          display={{
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          }}
          className={classes.menu}
        >
          <Drawer />
        </Box> */}
        </Tabs>
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
  );
}

export default Tabbar;
