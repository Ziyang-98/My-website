import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PythonIcon from "../Images/Python.png";
import JavascriptIcon from "../Images/Javascript.png";
import JavaIcon from "../Images/Java.png";
import HtmlIcon from "../Images/html5.png";
import CssIcon from "../Images/css3.png";
import ReactIcon from "../Images/React.png";
import NodejsIcon from "../Images/nodejs.png";
import GitIcon from "../Images/git.png";
import GitHubIcon from "../Images/github.png";
// import MuiIcon from "../Images/mui.png";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(1),
    color: "#1e88e5",
  },

  iconHolder: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },

  icon: {
    height: 40,
    width: 40,
    marginRight: theme.spacing(2),
  },
}));

export default function Icons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.title}>
        Languages
      </Typography>
      <div className={classes.iconHolder}>
        <Tooltip title="Python" TransitionComponent={Zoom} enterTouchDelay="50">
          <img src={PythonIcon} className={classes.icon} alt="python icon" />
        </Tooltip>
        <Tooltip title="Java" TransitionComponent={Zoom} enterTouchDelay="50">
          <img src={JavaIcon} className={classes.icon} alt="java icon" />
        </Tooltip>
        <Tooltip
          title="Javascript"
          TransitionComponent={Zoom}
          enterTouchDelay="50"
        >
          <img
            src={JavascriptIcon}
            className={classes.icon}
            alt="javascript icon"
          />
        </Tooltip>
        <Tooltip title="HTML5" TransitionComponent={Zoom} enterTouchDelay="50">
          <img src={HtmlIcon} className={classes.icon} alt="html5 icon" />
        </Tooltip>
        <Tooltip title="CSS3" TransitionComponent={Zoom} enterTouchDelay="50">
          <img src={CssIcon} className={classes.icon} alt="css3 icon" />
        </Tooltip>
      </div>
      <Typography variant="subtitle1" className={classes.title}>
        Frameworks and Tools
      </Typography>
      <div className={classes.iconHolder}>
        <Tooltip
          title="ReactJS"
          TransitionComponent={Zoom}
          enterTouchDelay="50"
        >
          <img src={ReactIcon} className={classes.icon} alt="reactjs icon" />
        </Tooltip>
        <Tooltip title="NodeJS" TransitionComponent={Zoom} enterTouchDelay="50">
          <img src={NodejsIcon} className={classes.icon} alt="nodejs icon" />
        </Tooltip>
        <Tooltip title="Git" TransitionComponent={Zoom} enterTouchDelay="50">
          <img src={GitIcon} className={classes.icon} alt="git icon" />
        </Tooltip>
        <Tooltip title="GitHub" TransitionComponent={Zoom} enterTouchDelay="50">
          <img src={GitHubIcon} className={classes.icon} alt="Github icon" />
        </Tooltip>
      </div>
    </div>
  );
}
