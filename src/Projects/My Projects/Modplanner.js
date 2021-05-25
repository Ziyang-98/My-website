import ModPlannerImg from "../../Images/modplanner.png";
import ModPlannerLogo from "../../Images/modplannerlogo.png";
import JavascriptIcon from "../../Images/Javascript.png";
import HtmlIcon from "../../Images/html5.png";
import CssIcon from "../../Images/css3.png";
import ReactIcon from "../../Images/React.png";
import NodejsIcon from "../../Images/nodejs.png";
import MongoDbicon from "../../Images/mongodb.PNG";

const Modplanner = {
  title: "The Mod Planner",
  shortDescription:
    "A web app that allows NUS students to plan their modules " +
    "ahead of time with access to module information, guides and a Q&A platform.",
  image: {
    logo: ModPlannerLogo,
    display: ModPlannerImg,
    showcase: ModPlannerImg,
  },
  displaySize: {
    width: "100%",
    height: "80%",
  },
  showcaseSize: {
    large: { width: 750, height: 180 },
    medium: { width: 550, height: 140 },
    small: { width: 400, height: 100 },
  },
  description:
    "The Mod Planner is an app that is designed using the MERN stack. The app allows NUS students to " +
    "plan their university modules, share their planners as guides, " +
    "and participate in an online forum to discuss about relevant topics. " +
    "The project, handled by a team of two, aims to ease the process " +
    "of module planning for NUS students.",
  roles: [
    "Designed and built the frontend with ReactJS",
    "Added Web hooks in the backend API to push or get data from the database, MongoDB",
  ],
  links: [
    {
      name: "Project Info",
      link: "https://docs.google.com/document/d/1cFqpF2JK2G6i8kgYlLqNP0YzqufmyRjRfxee1blIGwQ/edit?usp=sharing",
    },
    {
      name: "Project Link",
      link: "https://mod-planner.herokuapp.com",
    },
    {
      name: "Repository",
      link: "https://github.com/Ziyang-98/NUS-University-Path-Planner",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "NodeJS", img: NodejsIcon },
    { name: "mongoDB", img: MongoDbicon },
  ],
};

export default Modplanner;
