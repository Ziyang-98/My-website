import JobTrackShowcase from "assets/projects/jobtrack/jobtrackshowcase.PNG";
import JobTrackLogo from "assets/projects/jobtrack/jobtracklogo.png";
import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";
import MongoDbIcon from "assets/logos/framework/mongodb.PNG";

const JobTrack = {
  title: "Job Track",
  shortDescription: "A web app that makes life easier for any job applicants",
  image: {
    preview: JobTrackLogo,
    showcases: [{ image: JobTrackShowcase, title: "Main Page" }],
  },
  previewSize: {
    width: "30%",
    height: "100%",
  },
  showcaseSizes: {
    large: { width: 1000, height: 500 },
    medium: { width: 600, height: 300 },
    small: { width: 400, height: 200 },
  },
  description:
    "Job Track is an Single-Page Application that is designed using the MERN stack. The app allows job applicants to " +
    "track their job applications with ease by allows them to record information for their job applications." +
    "Users are able to quickly import their job track information across multiple browser platforms as well.",
  roles: [
    "Designed and built the frontend with ReactJS",
    "Built the backend with NodeJS, ExpressJS with MongoDB as the database",
    "Implemented CI/CD and a serverless function to pull filtered and cleaned API data",
  ],
  links: [
    {
      name: "Project Link",
      link: "https://job-track-9c538.web.app/",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "NodeJS", img: NodejsIcon },
    { name: "MongoDB", img: MongoDbIcon },
  ],
};

export default JobTrack;
