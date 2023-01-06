import React from "react";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import JavascriptIcon from "assets/logos/language/javascript.png";
import TypescriptIcon from "assets/logos/language/typescript.png";
import JavaIcon from "assets/logos/language/java.png";
import PythonIcon from "assets/logos/language/python.png";
import CIcon from "assets/logos/language/c.png";
import CppIcon from "assets/logos/language/cpp.png";
import RubyIcon from "assets/logos/language/ruby.png";

import HtmlIcon from "assets/logos/framework/html5.png";
import CssIcon from "assets/logos/framework/css3.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";
import QianKunIcon from "assets/logos/framework/qiankun.png";
import GraphQLIcon from "assets/logos/framework/graphql.png";
import MongoDbIcon from "assets/logos/framework/mongodb.PNG";
import GitIcon from "assets/logos/framework/git.png";
import GitHubIcon from "assets/logos/framework/github.png";
import BitBucketIcon from "assets/logos/framework/bitbucket.PNG";
import GitLabIcon from "assets/logos/framework/gitlab.png";
import SpringBootIcon from "assets/logos/framework/springboot.png";
import GradleIcon from "assets/logos/framework/gradle.png";
import MavenIcon from "assets/logos/framework/maven.png";
import DockerIcon from "assets/logos/framework/docker.png";
import KubernetesIcon from "assets/logos/framework/kubernetes.png";
import FirebaseIcon from "assets/logos/framework/firebase.png";
import GoogleCloudPlatformIcon from "assets/logos/framework/googlecloudplatform.png";
import GoogleDialogFlowIcon from "assets/logos/framework/dialogflow.png";
import TensorFlowIcon from "assets/logos/framework/tensorflow.png";
import OpenCVIcon from "assets/logos/framework/opencv.png";

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

const languages = [
  { img: JavascriptIcon, title: "Javascript", alt: "javascript icon" },
  { img: TypescriptIcon, title: "Typescript", alt: "typescript icon" },
  { img: JavaIcon, title: "Java", alt: "java icon" },
  { img: PythonIcon, title: "Python", alt: "python icon" },
  { img: CIcon, title: "C", alt: "c icon" },
  { img: CppIcon, title: "C++", alt: "cpp icon" },
  { img: RubyIcon, title: "Ruby", alt: "ruby icon" },
];

const frameworks = [
  { img: HtmlIcon, title: "HTML", alt: "html icon" },
  { img: CssIcon, title: "CSS", alt: "css icon" },
  { img: ReactIcon, title: "ReactJS", alt: "reactjs icon" },
  { img: NodejsIcon, title: "NodeJS", alt: "nodejs icon" },
  { img: QianKunIcon, title: "qiankun", alt: "qiankun icon" },
  { img: GraphQLIcon, title: "GraphQL", alt: "graphql icon" },
  { img: MongoDbIcon, title: "MongoDB", alt: "mongodb icon" },
  { img: GitIcon, title: "Git", alt: "git icon" },
  { img: GitHubIcon, title: "GitHub", alt: "github icon" },
  { img: BitBucketIcon, title: "BitBucket", alt: "bitbucket icon" },
  { img: GitLabIcon, title: "GitLab", alt: "gitlab icon" },
  { img: SpringBootIcon, title: "SpringBoot", alt: "springboot icon" },
  { img: GradleIcon, title: "Gradle", alt: "gradle icon" },
  { img: MavenIcon, title: "Maven", alt: "maven icon" },
  { img: DockerIcon, title: "Docker", alt: "docker icon" },
  { img: KubernetesIcon, title: "Kubernetes", alt: "kubernetes icon" },
  { img: FirebaseIcon, title: "Firebase", alt: "firebase icon" },
  {
    img: GoogleCloudPlatformIcon,
    title: "Google Cloud Platform",
    alt: "gcp icon",
  },
  {
    img: GoogleDialogFlowIcon,
    title: "Google Dialogflow",
    alt: "google dialogflow icon",
  },
  { img: TensorFlowIcon, title: "TensorFlow", alt: "tensorflow icon" },
  { img: OpenCVIcon, title: "OpenCV", alt: "opencv icon" },
];

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
          {languages.map((lang) => (
            <Tooltip
              title={lang.title}
              TransitionComponent={Zoom}
              enterTouchDelay="50"
            >
              <img src={lang.img} style={styles.icon} alt={lang.alt} />
            </Tooltip>
          ))}
        </Box>
      </Box>
      <Typography variant="subtitle1" sx={styles.title}>
        Frameworks and Tools
      </Typography>
      <Box sx={styles.iconBox}>
        <Box sx={styles.iconHolder}>
          {frameworks.map((framework) => (
            <Tooltip
              title={framework.title}
              TransitionComponent={Zoom}
              enterTouchDelay="50"
            >
              <img
                src={framework.img}
                style={styles.icon}
                alt={framework.alt}
              />
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
