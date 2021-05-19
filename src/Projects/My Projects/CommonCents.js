import Ui from "../../Images/commoncents.png";
import Logo from "../../Images/commoncentslogo.png";
import JavaIcon from "../../Images/Java.png";
import JavaFXIcon from "../../Images/javafx.PNG";
import GradleIcon from "../../Images/gradle.png";

const CommonCents = {
  title: "Common Cents",
  shortDescription:
    "A Java app for small business owners to manage financial transactions and earnings.",
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
    "Common Cents is a command-line based app that aims to assist small business owners. " +
    "It allows the small business owners to keep track of their expenses as well as revenues " +
    "with simple command inputs. This brownfield team project is based " +
    "on a software engineering module, CS2103T, in NUS.",
  roles: [
    "Team Lead: Led the overall direction and development of the project",
    "Designed and implemented the model structure of the app",
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
