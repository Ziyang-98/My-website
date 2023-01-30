import CoralReefPreview from "assets/projects/coralreef/coralreefpreview.PNG";
import LandingPageImg from "assets/projects/coralreef/landingpage.PNG";
import OptionsImg from "assets/projects/coralreef/optionspage.PNG";
import SelectionPageImg from "assets/projects/coralreef/selectionpage.PNG";
import ResultPageImg from "assets/projects/coralreef/resultpage.PNG";
import ProfilePageImg from "assets/projects/coralreef/profilepage.PNG";
import LoginPageImg from "assets/projects/coralreef/loginpage.PNG";
import AdminPageImg from "assets/projects/coralreef/adminpage.PNG";
import EditSpeciesImg from "assets/projects/coralreef/editspeciespage.PNG";

import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import FirebaseIcon from "assets/logos/framework/firebase.png";

const CoralReefConservation = {
  title: "Coral Reef Conservation",
  shortDescription:
    "A Coral Reef species library with filtering and priorization for Coral Transplantation.",
  image: {
    logo: null,
    preview: CoralReefPreview,
    showcases: [
      { image: LandingPageImg, title: "Landing Page" },
      { image: OptionsImg, title: "Preset Options" },
      { image: SelectionPageImg, title: "Custom Selection Page" },
      { image: ResultPageImg, title: "Results Page" },
      { image: ProfilePageImg, title: "Species Profile Page" },
      { image: LoginPageImg, title: "Admin Login Page" },
      { image: AdminPageImg, title: "Admin Main Page" },
      { image: EditSpeciesImg, title: "Admin Update Specimen Page" },
    ],
  },
  previewSize: {
    width: "90%",
    height: "60%",
  },
  showcaseSizes: {
    large: { width: 650, height: 470 },
    medium: { width: 500, height: 360 },
    small: { width: 320, height: 230 },
  },

  description:
    "Coral Reef Conservation is an app that is designed using ReactJS as its front-end framework and Firebase for the database and user authentication / authorization. " +
    "The app is designed to ease the transplantation process of corals by guiding users using appropriate criterias produced by the Reef Ecology Lab, NUS. " +
    "The app also comes with an administrative system for the marine biologists in Reef Ecology Lab to upload data easily to the library available.",
  roles: [
    "Designed the user interface and the model schemas of the database",
    "Developed the user interface of the results page with ReactJS",
    "Implemented a multi-criteria priority sorting algorithm to filter results",
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
