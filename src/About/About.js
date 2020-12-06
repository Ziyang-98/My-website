import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../Images/avataaars.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Icons from "./Icons";

const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: 1,
    height: 350,
    paddingTop: theme.spacing(25),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      height: 700,
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(20),
    },
  },

  infoHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "50%",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(20),
      height: "50%",
      width: "100%",
    },
  },

  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",

    width: "50%",
    float: "left",
    [theme.breakpoints.down("sm")]: {
      height: "50%",

      width: "100%",
    },
  },

  image: {
    height: 350,
    width: 330,
    marginLeft: theme.spacing(20),
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(15),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },
  },

  infoBox: {
    marginLeft: theme.spacing(15),
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(10),
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: theme.spacing(0),
    },
  },

  title: {
    // width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(5),
    },
  },

  details: {
    marginTop: theme.spacing(2),
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  icons: {
    marginTop: theme.spacing(2),
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.container} id="About">
      <Box className={classes.imageHolder}>
        {/* <Typography variant="h4">About Me</Typography> */}
        <img src={Avatar} className={classes.image} alt="About Avatar" />
      </Box>
      <Box className={classes.infoHolder}>
        <div className={classes.infoBox}>
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
          <Icons />
        </div>
      </Box>
    </div>
  );
}
