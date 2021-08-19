import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../Images/Profile/avataaars.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Icons from "./Icons";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: 1,
    height: 800,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(40),
    },
  },

  infoHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    [theme.breakpoints.down("md")]: {
      width: 450,
    },
  },

  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    [theme.breakpoints.down("md")]: {
      width: 450,
    },
  },

  image: {
    height: 350,
    width: 330,
  },

  infoBox: {
    width: "80%",
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(5),
    },
  },

  details: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Box className={classes.container} id="About">
      <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
        <Box className={classes.imageHolder}>
          {/* <Typography variant="h4">About Me</Typography> */}
          <img src={Avatar} className={classes.image} alt="About Avatar" />
        </Box>
      </ScrollAnimation>

      <Box className={classes.infoHolder}>
        <div className={classes.infoBox}>
          <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce={true}>
            <div className={classes.title}>
              <Typography variant="h4">About Me</Typography>
            </div>
            <div className={classes.details}>
              <Typography variant="subtitle1">
                Hello, I'm a Year 2 Computer Science Student who is studying in
                NUS. I am passionate about various fields of computing such as
                Artificial Intelligence (A.I.) and Software Engineering, and I
                intend to specialize in these fields as well. My experience in
                programming consist of the following:{" "}
              </Typography>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={450} animateOnce={true}>
            <Box className={classes.iconHolder} flexWrap="noWrap">
              <Icons />
            </Box>
          </ScrollAnimation>
        </div>
      </Box>
    </Box>
  );
}
