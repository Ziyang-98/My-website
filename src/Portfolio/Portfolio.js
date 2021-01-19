import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Experiences from "./Experiences";
import Achievements from "./Achievements";
// import Icons from "./Icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: theme.spacing(120),
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(50),
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(150),
    },
  },

  titleHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  infoHolder: {
    paddingTop: theme.spacing(5),
  },

  expHolder: {
    width: "50%",
    float: "left",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100%",
      //height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  achievementHolder: {
    width: "50%",
    float: "right",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      //padding: theme.spacing(5, 0),
      width: "100%",
      //height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.container} id="Portfolio">
      <Box className={classes.titleHolder}>
        <Typography variant="h3">My Portfolio</Typography>
      </Box>
      <Box className={classes.infoHolder}>
        <Box className={classes.expHolder} id="Experiences">
          <Experiences />
        </Box>
        <Box className={classes.achievementHolder} id="Achievements">
          <Achievements />
        </Box>
      </Box>
    </div>
  );
}

/*
    Experiences can be featured in a table,

    Achievements can be featured in a table,

    Projects can be features in a form of card medias
*/
