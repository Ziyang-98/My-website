import CommonCentsPreview from "assets/projects/commoncents/commoncentspreview.png";
import CommonCentsShowcase from "assets/projects/commoncents/commoncentsshowcase.png";
import JavaIcon from "assets/logos/language/java.png";
import JavaFXIcon from "assets/logos/framework/javafx.PNG";
import GradleIcon from "assets/logos/framework/gradle.png";

const CommonCents = {
  title: "Common Cents",
  shortDescription:
    "A Java app for small business owners to manage financial transactions and earnings.",
  image: {
    logo: null,
    preview: CommonCentsPreview,
    showcases: [{ image: CommonCentsShowcase, title: "Common Cent's UI" }],
  },
  previewSize: {
    width: "30%",
    height: "100%",
  },
  showcaseSizes: {
    large: { width: 600, height: 400 },
    medium: { width: 500, height: 350 },
    small: { width: 320, height: 210 },
  },

  description:
    "Common Cents is a command-line based app that aims to assist small business owners. " +
    "It allows the small business owners to keep track of their expenses as well as revenues " +
    "with simple command inputs. This brownfield team project is based " +
    "on a software engineering module, CS2103T, in NUS.",
  roles: [
    "Team Lead: Led the overall direction and development of the project",
    "Designed and implemented the model structure of the application",
    "Implemented the logical execution of features in the application",
    'More information can be found under "Contributions" link below',
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
      name: "Repository",
      link: "https://github.com/AY2021S1-CS2103T-T13-4/tp",
    },
    {
      name: "Contributions",
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
