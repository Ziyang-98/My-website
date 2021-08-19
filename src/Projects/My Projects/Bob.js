import BobImage from "../../Images/Projects/bob.PNG";
import Boblogo from "../../Images/Projects/boblogo.PNG";
import JavaIcon from "../../Images/Logos/Language/java.png";
import JavaFXIcon from "../../Images/Logos/Framework/javafx.PNG";
import GradleIcon from "../../Images/Logos/Framework/gradle.png";

const Bob = {
  title: "Bob",
  shortDescription:
    "A Java bot app that allows users to manages tasks, events and deadlines.",
  image: { logo: null, display: Boblogo, showcase: BobImage },
  displaySize: {
    width: "70%",
    height: "90%",
  },
  showcaseSize: {
    large: { width: 400, height: 600 },
    medium: { width: 400, height: 600 },
    small: { width: 300, height: 500 },
  },
  description:
    "Bob is a command-line based bot that keeps track of the user's tasks, events " +
    "and deadlines through conversations. Features include a variety of commands that " +
    "allow users to manage their tasks in an optimal environment for CLI. " +
    "This greenfield individual project is based on a software engineering module, CS2103T, in NUS.",
  roles: ["Designed, contructed and integrated all the components of the app"],
  links: [
    {
      name: "Project Info",
      link: "https://ziyang-98.github.io/ip/",
    },
    {
      name: "Project Link",
      link: "https://github.com/Ziyang-98/ip/releases/tag/A-Release",
    },
    {
      name: "Repository",
      link: "https://github.com/Ziyang-98/ip/",
    },
  ],
  techStack: [
    { name: "Java", img: JavaIcon },
    { name: "JavaFX", img: JavaFXIcon },
    { name: "Gradle", img: GradleIcon },
  ],
};

export default Bob;
