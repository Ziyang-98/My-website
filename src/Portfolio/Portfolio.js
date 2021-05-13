import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Experiences from "./Experiences";
import Achievements from "./Achievements";
// import Icons from "./Icons";

const useStyles = makeStyles((theme) => ({
  container: {
    // height: theme.spacing(120),
    marginTop: theme.spacing(18),
    paddingBottom: theme.spacing(50),
    zIndex: 1,
    // [theme.breakpoints.down("sm")]: {
    //   height: theme.spacing(150),
    // },
  },

  titleHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  infoHolder: {
    paddingTop: theme.spacing(5),
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  expHolder: {
    float: "left",
    height: "100%",
  },

  achievementHolder: {
    float: "right",
    height: "100%",
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
