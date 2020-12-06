import BobImage from "../../Images/bob.PNG";
import BobDisplay from "../../Images/bobdisplay.PNG";
import Boblogo from "../../Images/boblogo.PNG";
import JavaIcon from "../../Images/Java.png";
import JavaFXIcon from "../../Images/javafx.PNG";
import GradleIcon from "../../Images/gradle.png";

const Bob = {
  title: "Bob",
  shortDescription:
    "A bot that allows users to manages tasks, events and deadlines.",
  image: { logo: null, display: Boblogo, showcase: BobImage },
  displaySize: {
    width: "70%",
    height: "90%",
  },
  showcaseSize: {
    large: { width: 450, height: 350 },
    medium: { width: 400, height: 300 },
    small: { width: 400, height: 300 },
  },
  description:
    "Bob is a command-line based bot that keeps track of the user's tasks, events \
    and deadlines through conversations. Features include a variety of commands that \
    allow users to manage their tasks in an optimal environment for CLI. \
    Bob is a greenfield project based on a module, CS2103T, in NUS.\
    ",
  roles: [
    "Designed and implemented the model, logic and UI of the application",
  ],
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
      name: "Github Repository",
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
