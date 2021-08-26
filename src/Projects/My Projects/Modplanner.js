import ModPlannerLogo from "../../Images/Projects/modplanner/modplannerlogo.png";
import ModPlannerPreview from "../../Images/Projects/modplanner/modplannerpreview.png";
import HomePageImg from "../../Images/Projects/modplanner/homepage.PNG";
import PlannerPageImg from "../../Images/Projects/modplanner/plannerpage.PNG";
import ExportGuideImg from "../../Images/Projects/modplanner/exportguidepage.PNG";
import ReviewsPageImg from "../../Images/Projects/modplanner/reviewspage.PNG";
import GuidePageImg from "../../Images/Projects/modplanner/guidepage.PNG";
import ForumPageImg from "../../Images/Projects/modplanner/forumpage.PNG";
import CreateQuestionImg from "../../Images/Projects/modplanner/createquestionpage.PNG";
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
    showcases: [
      HomePageImg,
      PlannerPageImg,
      ExportGuideImg,
      ReviewsPageImg,
      GuidePageImg,
      ForumPageImg,
      CreateQuestionImg,
    ],
  },
  previewSize: {
    width: "100%",
    height: "80%",
  },
  showcaseSizes: {
    large: { width: 800, height: 570 },
    medium: { width: 500, height: 360 },
    small: { width: 350, height: 250 },
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
