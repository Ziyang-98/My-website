import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Exp from "./ExpTimeLine";
import ScrollAnimation from "react-animate-on-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "animate.css/animate.compat.css";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    zIndex: 1,
  },

  titleHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  infoHolder: {
    paddingTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  description: {
    color: "#bbbbbf",
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const theme = useTheme();
  const mobileVP = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.container} id="Portfolio">
      <Box className={classes.titleHolder}>
        <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce={true}>
          <Typography variant={mobileVP ? "h4" : "h3"}>
            My Experiences
          </Typography>
        </ScrollAnimation>
      </Box>
      <Box className={classes.infoHolder}>
        <ScrollAnimation animateIn="fadeIn" delay={800} animateOnce={true}>
          <Typography variant="body1" className={classes.description}>
            Click on each icon to find out more
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={450} animateOnce={true}>
          <Box className={classes.expHolder} id="Experiences">
            <Exp />
          </Box>
        </ScrollAnimation>
      </Box>
    </div>
  );
}

/*
    Experiences can be featured in a table,

    Achievements can be featured in a table,

    Projects can be features in a form of card medias
*/
