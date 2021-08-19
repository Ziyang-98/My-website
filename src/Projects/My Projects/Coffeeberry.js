import CoffeeberryImg from "../../Images/Projects/coffeeberry.PNG";
import CoffeeberryDisplay from "../../Images/Projects/coffeeberrydisplay.PNG";
import CoffeeberryIcon from "../../Images/Projects/coffeeberrylogo.PNG";
import JavascriptIcon from "../../Images/Logos/Language/javascript.png";
import ReactIcon from "../../Images/Logos/Framework/react.png";
import NodejsIcon from "../../Images/Logos/Framework/nodejs.png";

const Coffeeberry = {
  title: "Coffeeberry",
  shortDescription:
    "A web e-commerce app that connects coffee bean suppliers and coffee bean buyers",
  image: {
    logo: CoffeeberryIcon,
    display: CoffeeberryDisplay,
    showcase: CoffeeberryImg,
  },
  displaySize: {
    width: "80%",
    height: "70%",
  },
  showcaseSize: {
    large: { width: 750, height: 500 },
    medium: { width: 550, height: 400 },
    small: { width: 400, height: 300 },
  },
  description:
    "Coffeeberry is an online market for coffee bean suppliers to post their goods for sale, " +
    "and for buyers to search for the type of coffee beans they want. It serves as a an E-commerce " +
    "platform optimized and tuned for the coffee bean industry. This project was idealized and created " +
    "in 24 hours for HackNRoll Hackathon 2021.",
  roles: [
    "Designed the User Interface of the app",
    "Implemented the frontend API",
    "Integrated the backend and frontend logic",
  ],
  links: [
    {
      name: "Project Info",
      link: "https://devpost.com/software/afasf/",
    },
    {
      name: "Repository",
      link: "https://github.com/Ziyang-98/coffeeberry",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "NodeJS", img: NodejsIcon },
  ],
};

export default Coffeeberry;
