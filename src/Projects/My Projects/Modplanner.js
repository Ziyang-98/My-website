import ModPlannerImg from "../../Images/modplanner.png";
import ModPlannerLogo from "../../Images/modplannerlogo.png";
import JavascriptIcon from "../../Images/Javascript.png";
import HtmlIcon from "../../Images/html5.png";
import CssIcon from "../../Images/css3.png";
import ReactIcon from "../../Images/React.png";
import NodejsIcon from "../../Images/nodejs.png";

const Modplanner = {
  title: "The Mod Planner",
  shortDescription:
    "A web application that allows NUS students to plan their modules \
    ahead of time with access to module information, guides and a Q&A platform.",
  image: { logo: ModPlannerLogo, showcase: ModPlannerImg },
  description:
    "The Mod Planner is a application in which users are able to \
    plan their university modules, share their planners as guides, \
    and participate in an online forum to discuss about relevant topics.\
    The project, managed by a team of two, aims to ease the process \
    of planning modules for NUS students.",
  roles: [
    "Designed and built the frontend with ReactJS",
    "Integrated the backend network \
  with NodeJS to our database, MongoDB.",
  ],
  links: [
    {
      name: "Github Repository",
      link: "https://github.com/Ziyang-98/NUS-University-Path-Planner",
    },
    {
      name: "Website Link",
      link: "https://mod-planner.herokuapp.com",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "HTLM5", img: HtmlIcon },
    { name: "CSS3", img: CssIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "NodeJS", img: NodejsIcon },
  ],
};

export default Modplanner;
