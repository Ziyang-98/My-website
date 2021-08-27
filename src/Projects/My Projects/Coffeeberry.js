import CoffeeberryLogo from "../../Images/Projects/coffeeberry/coffeeberrylogo.PNG";
import CoffeeberryPreview from "../../Images/Projects/coffeeberry/coffeeberrypreview.PNG";
import HomePageImg from "../../Images/Projects/coffeeberry/homepage.PNG";
import MarketImg from "../../Images/Projects/coffeeberry/marketpage.PNG";
import ProductImg from "../../Images/Projects/coffeeberry/productpage.PNG";
import ManagePostingImg from "../../Images/Projects/coffeeberry/managepostingpage.PNG";
import CreatePostingImg from "../../Images/Projects/coffeeberry/createpostingpage.PNG";

import OrdersImg from "../../Images/Projects/coffeeberry/orderspage.PNG";
import JavascriptIcon from "../../Images/Logos/Language/javascript.png";
import ReactIcon from "../../Images/Logos/Framework/react.png";
import NodejsIcon from "../../Images/Logos/Framework/nodejs.png";

const Coffeeberry = {
  title: "Coffeeberry",
  shortDescription:
    "A web e-commerce app that connects coffee bean suppliers and coffee bean buyers",
  image: {
    logo: CoffeeberryLogo,
    preview: CoffeeberryPreview,
    showcases: [
      { image: HomePageImg, title: "Home Page" },
      { image: MarketImg, title: "Market Page" },
      { image: ProductImg, title: "Product Page" },
      { image: OrdersImg, title: "User's Orders Page" },
      { image: ManagePostingImg, title: "Manage Posting Page" },
      { image: CreatePostingImg, title: "Create Posting Page" },
    ],
  },
  previewSize: {
    width: "80%",
    height: "70%",
  },
  showcaseSizes: {
    large: { width: 630, height: 470 },
    medium: { width: 500, height: 370 },
    small: { width: 320, height: 240 },
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
