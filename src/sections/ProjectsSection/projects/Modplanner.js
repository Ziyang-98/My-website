import ModPlannerLogo from "assets/projects/modplanner/modplannerlogo.png";
import ModPlannerPreview from "assets/projects/modplanner/modplannerpreview.png";
import HomePageImg from "assets/projects/modplanner/homepage.PNG";
import PlannerPageImg from "assets/projects/modplanner/plannerpage.PNG";
import ExportGuideImg from "assets/projects/modplanner/exportguidepage.PNG";
import ReviewsPageImg from "assets/projects/modplanner/reviewspage.PNG";
import GuidePageImg from "assets/projects/modplanner/guidepage.PNG";
import ForumPageImg from "assets/projects/modplanner/forumpage.PNG";
import CreateQuestionImg from "assets/projects/modplanner/createquestionpage.PNG";
import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";
import MongoDbIcon from "assets/logos/framework/mongodb.PNG";

const Modplanner = {
  title: "The Mod Planner",
  shortDescription:
    "A web app that allows NUS students to plan all their modules " +
    "ahead of time.",
  image: {
    logo: ModPlannerLogo,
    preview: ModPlannerPreview,
    showcases: [
      { image: HomePageImg, title: "Home Page" },
      { image: PlannerPageImg, title: "User's Planner Page" },
      { image: ExportGuideImg, title: "Export Guide Option" },
      { image: ReviewsPageImg, title: "Reviews & Guides Page" },
      { image: GuidePageImg, title: "User's Exported Guide Page" },
      { image: ForumPageImg, title: "Forums Page" },
      { image: CreateQuestionImg, title: "Create Question Page" },
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
    "of module planning for NUS students. (Note: Give the website some time to load due to inactivity on heruko servers)",
  roles: [
    "Designed and built the user interface with ReactJS",
    "Added web hooks in the server to push or get data from the MongoDB database",
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
