import React from "react";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import PythonIcon from "assets/logos/language/python.png";
import JavascriptIcon from "assets/logos/language/javascript.png";
import TypescriptIcon from "assets/logos/language/typescript.png";
import JavaIcon from "assets/logos/language/java.png";
import HtmlIcon from "assets/logos/language/html5.png";
import CssIcon from "assets/logos/language/css3.png";
import CIcon from "assets/logos/language/c.png";
import RubyIcon from "assets/logos/language/ruby.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";
import GraphQLIcon from "assets/logos/framework/graphql.png";
import GitIcon from "assets/logos/framework/git.png";
import GitHubIcon from "assets/logos/framework/github.png";
import BitBucketIcon from "assets/logos/framework/bitbucket.PNG";
import GradleIcon from "assets/logos/framework/gradle.png";
import MavenIcon from "assets/logos/framework/maven.png";
import SpringBootIcon from "assets/logos/framework/springboot.png";
import MongoDbIcon from "assets/logos/framework/mongodb.PNG";
import FirebaseIcon from "assets/logos/framework/firebase.png";
import GoogleDialogFlowIcon from "assets/logos/framework/dialogflow.png";

const useStyles = (theme) => ({
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
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  icon: {
    height: 40,
    width: 40,
    padding: theme.spacing(1),
  },
});

export default function Icons() {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.root}>
      <Typography variant="subtitle1" sx={styles.title}>
        Languages
      </Typography>
      <Box sx={styles.iconBox}>
        <Box sx={styles.iconHolder}>
          <Tooltip
            title="Javascript"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={JavascriptIcon}
              style={styles.icon}
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
              style={styles.icon}
              alt="typescript icon"
            />
          </Tooltip>
          <Tooltip title="Java" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={JavaIcon} style={styles.icon} alt="java icon" />
          </Tooltip>

          <Tooltip
            title="Python"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={PythonIcon} style={styles.icon} alt="python icon" />
          </Tooltip>
          <Tooltip title="C++" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={CIcon} style={styles.icon} alt="c++ icon" />
          </Tooltip>
          <Tooltip title="Ruby" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={RubyIcon} style={styles.icon} alt="ruby icon" />
          </Tooltip>
        </Box>
      </Box>
      <Typography variant="subtitle1" sx={styles.title}>
        Frameworks and Tools
      </Typography>
      <Box sx={styles.iconBox}>
        <Box sx={styles.iconHolder}>
          <Tooltip
            title="HTML5"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={HtmlIcon} style={styles.icon} alt="html5 icon" />
          </Tooltip>
          <Tooltip title="CSS3" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={CssIcon} style={styles.icon} alt="css3 icon" />
          </Tooltip>
          <Tooltip
            title="ReactJS"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={ReactIcon} style={styles.icon} alt="reactjs icon" />
          </Tooltip>
          <Tooltip
            title="NodeJS"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={NodejsIcon} style={styles.icon} alt="nodejs icon" />
          </Tooltip>
          <Tooltip
            title="GraplQL"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={GraphQLIcon} style={styles.icon} alt="graphql icon" />
          </Tooltip>
          <Tooltip title="Git" TransitionComponent={Zoom} enterTouchDelay="50">
            <img src={GitIcon} style={styles.icon} alt="git icon" />
          </Tooltip>
          <Tooltip
            title="GitHub"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={GitHubIcon} style={styles.icon} alt="github icon" />
          </Tooltip>
          <Tooltip
            title="Bit Bucket"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={BitBucketIcon} style={styles.icon} alt="bitbucket icon" />
          </Tooltip>
          <Tooltip
            title="Gradle"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={GradleIcon} style={styles.icon} alt="gradle icon" />
          </Tooltip>
          <Tooltip
            title="Apache Maven"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={MavenIcon} style={styles.icon} alt="maven icon" />
          </Tooltip>
          <Tooltip
            title="Spring Boot"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={SpringBootIcon}
              style={styles.icon}
              alt="springboot icon"
            />
          </Tooltip>
          <Tooltip
            title="MongoDB"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={MongoDbIcon} style={styles.icon} alt="Mongodb icon" />
          </Tooltip>
          <Tooltip
            title="Firebase"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img src={FirebaseIcon} style={styles.icon} alt="firebase icon" />
          </Tooltip>
          <Tooltip
            title="Google Dialogflow"
            TransitionComponent={Zoom}
            enterTouchDelay="50"
          >
            <img
              src={GoogleDialogFlowIcon}
              style={styles.icon}
              alt="dialogflow icon"
            />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
