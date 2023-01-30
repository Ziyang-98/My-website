import PeerPrepLogo from "assets/projects/peerprep/peerpreplogo.png";
import LoginPageImg from "assets/projects/peerprep/loginpage.PNG";
import MatchingPageImg from "assets/projects/peerprep/matchingpage.PNG";
import MatchingDialogImg from "assets/projects/peerprep/matchingdialog.PNG";
import CollaborationPageImg from "assets/projects/peerprep/collaborationpage.PNG";
import ChatFeatureImg from "assets/projects/peerprep/chatfeature.PNG";
import HistoryPageImg from "assets/projects/peerprep/historypage.PNG";
import ProfilePageImg from "assets/projects/peerprep/profilepage.PNG";

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
    "A web app that simulates real-time collaborative coding interviews.",
  image: {
    logo: null,
    preview: PeerPrepLogo,
    showcases: [
      { image: LoginPageImg, title: "Login Page" },
      { image: MatchingPageImg, title: "Matching Page" },
      { image: MatchingDialogImg, title: "Matching Difficulty Dialog" },
      { image: CollaborationPageImg, title: "Collaboration Room Page" },
      {
        image: ChatFeatureImg,
        title: "Chat Feature in Collaboration Room",
        specificSizes: {
          large: { width: 630, height: 450 },
          medium: { width: 420, height: 300 },
          small: { width: 300, height: 250 },
        },
      },
      { image: HistoryPageImg, title: "Question History Page" },
      { image: ProfilePageImg, title: "Profie Management Page" },
    ],
  },
  previewSize: {
    width: "30%",
    height: "100%",
  },
  showcaseSizes: {
    large: { width: 900, height: 450 },
    medium: { width: 600, height: 300 },
    small: { width: 500, height: 250 },
  },

  description:
    "PeerPrep is a web application that is developed using the MERN stack. The app follows a microservice architecture which uses a Redis cache and is managed by Docker. " +
    "The project aims to help students ace their coding interviews through peer reviews, peer mock interviews and collaborative coding. " +
    "The app features a matching system according to question difficulty, mock interview questions and a real-time code editor for peers to practice coding together.",
  roles: [
    "Designed the user interface of the web application ",
    "Implemented the Matching Page & Collaboration Room Page with ReactJS",
    "Implemented the server for real-time collaboration on the coding platform with NodeJS",
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
