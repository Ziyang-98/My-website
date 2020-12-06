import Ui from "../../Images/commoncents.png";
//import Display from "../../Images/commoncentsdisplay.png";
import Logo from "../../Images/commoncentslogo.png";

import JavaIcon from "../../Images/Java.png";
import JavaFXIcon from "../../Images/javafx.PNG";
import GradleIcon from "../../Images/gradle.png";

const CommonCents = {
  title: "Common Cents",
  shortDescription:
    "An application for small business owners to manage financial transactions and earnings.",
  image: { logo: null, display: Logo, showcase: Ui },
  displaySize: {
    width: "30%",
    height: "100%",
  },
  showcaseSize: {
    large: { width: 600, height: 400 },
    medium: { width: 500, height: 350 },
    small: { width: 350, height: 230 },
  },
  description:
    "Common Cents is a finance-managing application that targets small business owners. " +
    "It allows small business owners to keep track of their expenses as well as revenues " +
    "based on simple command-line inputs. Common Cents is a complete team project based " +
    "on a module, CS2103T, in NUS.",
  roles: [
    "Team Lead: Led the overall Direction and development of the project",
    "Designed and implemented the model and code structure of the project",
    "Implemented the logic execution of features in the app",
    "Designed and implemented various features of the app",
  ],
  links: [
    {
      name: "Project Info",
      link: "https://ay2021s1-cs2103t-t13-4.github.io/tp/",
    },
    {
      name: "Project Link",
      link: "https://github.com/AY2021S1-CS2103T-T13-4/tp/releases/tag/v1.4",
    },
    {
      name: "Github Repository",
      link: "https://github.com/AY2021S1-CS2103T-T13-4/tp",
    },
    {
      name: "Project Portfolio",
      link: "https://ay2021s1-cs2103t-t13-4.github.io/tp/team/ziyang-98.html",
    },
  ],
  techStack: [
    { name: "Java", img: JavaIcon },
    { name: "JavaFX", img: JavaFXIcon },
    { name: "Gradle", img: GradleIcon },
  ],
};

export default CommonCents;
