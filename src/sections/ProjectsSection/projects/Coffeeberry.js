import CoffeeberryLogo from "assets/projects/coffeeberry/coffeeberrylogo.PNG";
import HomePageImg from "assets/projects/coffeeberry/homepage.PNG";
import MarketImg from "assets/projects/coffeeberry/marketpage.PNG";
import ProductImg from "assets/projects/coffeeberry/productpage.PNG";
import ManagePostingImg from "assets/projects/coffeeberry/managepostingpage.PNG";
import CreatePostingImg from "assets/projects/coffeeberry/createpostingpage.PNG";
import OrdersImg from "assets/projects/coffeeberry/orderspage.PNG";
import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";

const Coffeeberry = {
  title: "Coffeeberry",
  shortDescription:
    "A web e-commerce app that connects coffee bean suppliers and coffee bean buyers.",
  image: {
    logo: null,
    preview: CoffeeberryLogo,
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
    width: "30%",
    height: "100%",
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
    "Designed and developed the user interface of the web application's client with ReactJS",
    "Integrated logic between the server and the client",
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
