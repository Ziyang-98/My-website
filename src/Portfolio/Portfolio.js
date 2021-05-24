import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Experiences from "./Experiences";
import Exp from "./Exp";
// import Achievements from "./Achievements";
// import Icons from "./Icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(18),
    zIndex: 1,
  },

  titleHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  infoHolder: {
    paddingTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
        <Typography variant="body1">
          Click on the icons to find out more
        </Typography>
        <Box className={classes.expHolder} id="Experiences">
          <Exp />
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
