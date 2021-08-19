import ModPlannerLogo from "../../Images/Projects/modplannerlogo.png";
import ModPlannerPreview from "../../Images/Projects/modplannerpreview.png";
import ModPlannerShowcase from "../../Images/Projects/modplannershowcase.PNG";
import JavascriptIcon from "../../Images/Logos/Language/javascript.png";
import ReactIcon from "../../Images/Logos/Framework/react.png";
import NodejsIcon from "../../Images/Logos/Framework/nodejs.png";
import MongoDbIcon from "../../Images/Logos/Framework/mongodb.PNG";

const Modplanner = {
  title: "The Mod Planner",
  shortDescription:
    "A web app that allows NUS students to plan their modules " +
    "ahead of time with access to module information, guides and a Q&A platform.",
  image: {
    logo: ModPlannerLogo,
    preview: ModPlannerPreview,
    showcase: ModPlannerShowcase,
  },
  previewSize: {
    width: "100%",
    height: "80%",
  },
  showcaseSize: {
    large: { width: 700, height: 500 },
    medium: { width: 550, height: 390 },
    small: { width: 400, height: 285 },
  },
  description:
    "The Mod Planner is an app that is designed using the MERN stack. The app allows NUS students to " +
    "plan their university modules, share their planners as guides, " +
    "and participate in an online forum to discuss about relevant topics. " +
    "The project, handled by a team of two, aims to ease the process " +
    "of module planning for NUS students. (*Note*: Give the website some time to load due to inactivity on heruko servers)",
  roles: [
    "Designed and built the frontend with ReactJS",
    "Added web hooks in the backend API to push or get data from the database, MongoDB",
  ],
  links: [
    {
      name: "Project Info",
      link: "https://mod-planner.herokuapp.com/About",
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
    { name: "MongoDB", img: MongoDbIcon },
  ],
};

export default Modplanner;
