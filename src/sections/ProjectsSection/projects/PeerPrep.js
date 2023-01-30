import PeerPrepLogo from "assets/projects/peerprep/peerpreplogo.png";

import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";
import MongoDbIcon from "assets/logos/framework/mongodb.PNG";
import DockerIcon from "assets/logos/framework/docker.png";
import KubernetesIcon from "assets/logos/framework/kubernetes.png";
import RedisIcon from "assets/logos/framework/redis.png";

const PeerPrep = {
  title: "PeerPrep",
  shortDescription:
    "A web app that simulates coding interviews for job applicants.",
  image: {
    logo: null,
    preview: PeerPrepLogo,
    showcases: [],
  },
  previewSize: {
    width: "30%",
    height: "100%",
  },
  showcaseSizes: {
    large: { width: 650, height: 470 },
    medium: { width: 500, height: 360 },
    small: { width: 320, height: 230 },
  },

  description:
    "PeerPrep is a web application that is developed using the MERN stack. The app follows a microservice architecture which is managed by Docker & Kubernetes and uses a Redis cache. " +
    "The project aims to help students ace their coding interviews through real-time collaborative coding, peer reviews and peer mock interviews. " +
    "The app features a matching system according to question difficulty, mock interview questions and a real-time code editor for users to practice coding answers for the interview",
  roles: [
    "Designed the user interface of the web application ",
    "Implemented the Matching Page & Collaboration Room Page with ReactJS",
    "Implemented the server for real-time collaboration for the coding platform with NodeJS",
  ],
  links: [
    {
      name: "Project Info",
      link: "https://docs.google.com/document/d/14380hFoPU7Eb4YjTEynvIBteRNTXy4sq30AoC4jQB58/edit?usp=sharing",
    },
    {
      name: "Repository",
      link: "https://github.com/Ziyang-98/peer-prep",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "NodeJS", img: NodejsIcon },
    { name: "MongoDB", img: MongoDbIcon },
    { name: "Docker", img: DockerIcon },
    { name: "Kubernetes", img: KubernetesIcon },
    { name: "Redis", img: RedisIcon },
  ],
};

export default PeerPrep;
