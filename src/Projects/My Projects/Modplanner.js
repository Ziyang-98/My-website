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
    "A web application that allows NUS students to plan their modules " +
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
    "The Mod Planner is an application in which users are able to " +
    "plan their university modules, share their planners as guides, " +
    "and participate in an online forum to discuss about relevant topics. " +
    "The project, handled by a team of two, aims to ease the process " +
    "of module planning for NUS students.",
  roles: [
    "Designed and built the frontend with ReactJS",
    "Added Web hooks to connect the backend API to the database " +
      "with NodeJS to our database, MongoDB.",
  ],
  links: [
    {
      name: "Project Info",
      link: "",
    },
    {
      name: "Project Link",
      link: "https://mod-planner.herokuapp.com",
    },
    {
      name: "Github Repository",
      link: "https://github.com/Ziyang-98/NUS-University-Path-Planner",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "HTLM5", img: HtmlIcon },
    { name: "CSS3", img: CssIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "NodeJS", img: NodejsIcon },
    { name: "mongoDB", img: MongoDbicon },
  ],
};

export default Modplanner;
