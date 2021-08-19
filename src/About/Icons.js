import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PythonIcon from "../Images/Logos/Language/python.png";
import JavascriptIcon from "../Images/Logos/Language/javascript.png";
import TypescriptIcon from "../Images/Logos/Language/typescript.png";
import JavaIcon from "../Images/Logos/Language/java.png";
import HtmlIcon from "../Images/Logos/Language/html5.png";
import CssIcon from "../Images/Logos/Language/css3.png";
import CIcon from "../Images/Logos/Language/c.png";
import RubyIcon from "../Images/Logos/Language/ruby.png";
import ReactIcon from "../Images/Logos/Framework/react.png";
import NodejsIcon from "../Images/Logos/Framework/nodejs.png";
import GraphQLIcon from "../Images/Logos/Framework/graphql.png";
import GitIcon from "../Images/Logos/Framework/git.png";
import GitHubIcon from "../Images/Logos/Framework/github.png";
import BitBucketIcon from "../Images/Logos/Framework/bitbucket.PNG";
import GradleIcon from "../Images/Logos/Framework/gradle.png";
import MavenIcon from "../Images/Logos/Framework/maven.png";
import SpringBootIcon from "../Images/Logos/Framework/springboot.png";
import MongoDbIcon from "../Images/Logos/Framework/mongodb.PNG";
import FirebaseIcon from "../Images/Logos/Framework/firebase.png";
import GoogleDialogFlowIcon from "../Images/Logos/Framework/dialogflow.png";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  title: {
    color: "#1e88e5",
  },
  iconBox: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  iconHolder: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexWrap: "wrap",
  },

  icon: {
    height: 40,
    width: 40,
    margin: theme.spacing(1),
  },
}));

export default function Icons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.title}>
        Languages
      </Typography>
      <Box className={classes.iconBox}>
        <div className={classes.iconHolder}>
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
          <Tooltip
            title="Typescript"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={TypescriptIcon}
              className={classes.icon}
              alt="typescript icon"
            />
          </Tooltip>
          <Tooltip
            title="Python"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={PythonIcon} className={classes.icon} alt="python icon" />
          </Tooltip>
          <Tooltip
            title="HTML5"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={HtmlIcon} className={classes.icon} alt="html5 icon" />
          </Tooltip>
          <Tooltip title="CSS3" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={CssIcon} className={classes.icon} alt="css3 icon" />
          </Tooltip>
          <Tooltip title="C" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={CIcon} className={classes.icon} alt="c icon" />
          </Tooltip>
          <Tooltip title="Ruby" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={RubyIcon} className={classes.icon} alt="ruby icon" />
          </Tooltip>
        </div>
      </Box>
      <Typography variant="subtitle1" className={classes.title}>
        Frameworks and Tools
      </Typography>
      <Box className={classes.iconBox}>
        <div className={classes.iconHolder}>
          <Tooltip
            title="ReactJS"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={ReactIcon} className={classes.icon} alt="reactjs icon" />
          </Tooltip>
          <Tooltip
            title="NodeJS"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={NodejsIcon} className={classes.icon} alt="nodejs icon" />
          </Tooltip>
          <Tooltip
            title="GraplQL"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={GraphQLIcon}
              className={classes.icon}
              alt="graphql icon"
            />
          </Tooltip>
          <Tooltip title="Git" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={GitIcon} className={classes.icon} alt="git icon" />
          </Tooltip>
          <Tooltip
            title="GitHub"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={GitHubIcon} className={classes.icon} alt="github icon" />
          </Tooltip>
          <Tooltip
            title="Bit Bucket"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={BitBucketIcon}
              className={classes.icon}
              alt="bitbucket icon"
            />
          </Tooltip>
          <Tooltip
            title="Gradle"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={GradleIcon} className={classes.icon} alt="gradle icon" />
          </Tooltip>
          <Tooltip
            title="Apache Maven"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={MavenIcon} className={classes.icon} alt="maven icon" />
          </Tooltip>
          <Tooltip
            title="Spring Boot"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={SpringBootIcon}
              className={classes.icon}
              alt="springboot icon"
            />
          </Tooltip>
          <Tooltip
            title="MongoDB"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={MongoDbIcon}
              className={classes.icon}
              alt="Mongodb icon"
            />
          </Tooltip>
          <Tooltip
            title="Firebase"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={FirebaseIcon}
              className={classes.icon}
              alt="firebase icon"
            />
          </Tooltip>
          <Tooltip
            title="Google Dialogflow"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={GoogleDialogFlowIcon}
              className={classes.icon}
              alt="dialogflow icon"
            />
          </Tooltip>
        </div>
      </Box>
    </div>
  );
}
