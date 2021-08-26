import CoralReefPreview from "../../Images/Projects/coralreef/coralreefpreview.PNG";
import CoralReefShowcase from "../../Images/Projects/coralreef/coralreefshowcase.PNG";
import JavascriptIcon from "../../Images/Logos/Language/javascript.png";
import ReactIcon from "../../Images/Logos/Framework/react.png";
import FirebaseIcon from "../../Images/Logos/Framework/firebase.png";

const CoralReefConservation = {
  title: "Coral Reef Conservation",
  shortDescription:
    "A Coral Reef species library with filtering and priorization for Coral Transplantation.",
  image: {
    logo: null,
    preview: CoralReefPreview,
    showcases: [CoralReefShowcase],
  },
  previewSize: {
    width: "90%",
    height: "60%",
  },
  showcaseSizes: [
    {
      large: { width: 650, height: 580 },
      medium: { width: 550, height: 490 },
      small: { width: 400, height: 360 },
    },
  ],
  description:
    "Coral Reef Conservation is an app that is designed using ReactJS as its front-end framework and Firebase for the database and user authentication / authorization. " +
    "The app aims to ease the transplantation process of corals by guiding users using appropriate criterias produced by the Reef Ecology Lab, NUS. " +
    "The app also comes with an administrative system for the marine biologists in Reef Ecology Lab to upload data easily to the library available.",
  roles: [
    "Idealize the design of the User Interface and the structure of database",
    "Designed and built the User Interface (mainly the results page) with ReactJS",
    "Implemented a multi-criteria priority sorting algorithm for the results",
  ],
  links: [
    {
      name: "Project Link",
      link: "https://coral-2fea3.web.app/home",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "Firebase", img: FirebaseIcon },
  ],
};

export default CoralReefConservation;
