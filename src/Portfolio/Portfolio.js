import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Exp from "./ExpTimeLine";

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
    paddingTop: theme.spacing(8),
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

  return (
    <div className={classes.container} id="Portfolio">
      <Box className={classes.titleHolder}>
        <Typography variant="h3">My Portfolio</Typography>
      </Box>
      <Box className={classes.infoHolder}>
        <Typography variant="body1" className={classes.description}>
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
