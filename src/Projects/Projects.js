import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ModPlanner from "./My Projects/Modplanner";
import Bob from "./My Projects/Bob";
import CommonCents from "./My Projects/CommonCents";
import Coffeeberry from "./My Projects/Coffeeberry";
import CoralReefConservation from "./My Projects/CoralReefConservation";
import JobTrack from "./My Projects/JobTrack";
import Dialog from "./Dialog";
import ScrollAnimation from "react-animate-on-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "animate.css/animate.compat.css";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(15),
  },
  titleHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(4),
  },
  description: {
    color: "#bbbbbf",
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  outerGrid: {
    width: 903,
    [theme.breakpoints.down("sm")]: {
      width: 543,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  card: {
    height: "100%",
    width: 285,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.down("sm")]: {
      width: 255,
    },
    [theme.breakpoints.down("xs")]: {
      width: 290,
    },
  },
  cardClickable: {
    height: "100%",
  },
  cardMedia: {
    marginTop: "10%",
    marginBottom: "10%",
    height: 75,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
  logo: {
    marginLeft: theme.spacing(1),
    height: 20,
    width: 20,
  },

  cardTitleHolder: {
    display: "flex",
    alignItems: "baseline",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardButton: {},
}));

const projects = [
  JobTrack,
  CoralReefConservation,
  Coffeeberry,
  CommonCents,
  Bob,
  ModPlanner,
];

export default function Portfolio() {
  const classes = useStyles();
  const theme = useTheme();
  const mobileVP = useMediaQuery(theme.breakpoints.down("xs"));

  const showcaseStub = [
    {
      large: { width: 0, height: 0 },
      medium: { width: 0, height: 0 },
      small: { width: 0, height: 0 },
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [showcaseSizes, setShowcaseSizes] = React.useState(showcaseStub);
  const [image, setImage] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [roles, setRoles] = React.useState([]);
  const [links, setLinks] = React.useState([]);
  const [techStack, setTechStack] = React.useState([]);

  const handleClick = (
    title,
    image,
    showcaseSizes,
    description,
    roles,
    links,
    techStack
  ) => {
    setOpen(true);
    setTitle(title);
    setShowcaseSizes(showcaseSizes);
    setImage(image);
    setDescription(description);
    setRoles(roles);
    setLinks(links);
    setTechStack(techStack);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Card animation delay
  let delay = 100;
  const addOnDelay = 100;
  const descriptionDelay = delay + addOnDelay * projects.length + delay;

  return (
    <div className={classes.container} id="Projects">
      <Box className={classes.titleHolder}>
        <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce={true}>
          <Typography variant={mobileVP ? "h4" : "h3"}>My Projects</Typography>
        </ScrollAnimation>
      </Box>
      <Box className={classes.descriptionHolder}>
        <ScrollAnimation
          animateIn="fadeIn"
          delay={descriptionDelay}
          animateOnce={true}
        >
          <Typography variant="body1" className={classes.description}>
            Click on each card to find out more
          </Typography>
        </ScrollAnimation>
      </Box>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container className={classes.outerGrid} spacing={2}>
          {projects.map((project) => (
            <Grid item>
              <ScrollAnimation
                animateIn="fadeIn"
                delay={(delay += addOnDelay)}
                animateOnce={true}
                className={classes.card}
              >
                <Card className={classes.card} elevation={2}>
                  <CardActionArea
                    className={classes.cardClickable}
                    onClick={() =>
                      handleClick(
                        project.title,
                        project.image,
                        project.showcaseSizes,
                        project.description,
                        project.roles,
                        project.links,
                        project.techStack
                      )
                    }
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      title="Image title"
                    >
                      <img
                        className={classes.image}
                        src={project.image.preview}
                        alt="showcase"
                        width={project.previewSize.width}
                        height={project.previewSize.height}
                      />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <div className={classes.cardTitleHolder}>
                        <Typography gutterBottom variant="h5" component="span">
                          {project.title}
                          {project.image.logo && (
                            <img
                              className={classes.logo}
                              src={project.image.logo}
                              alt="logo"
                            />
                          )}
                        </Typography>
                      </div>
                      <Typography component="p">
                        {project.shortDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>{" "}
      </Container>
      <Dialog
        open={open}
        title={title}
        image={image}
        showcaseSizes={showcaseSizes}
        description={description}
        roles={roles}
        links={links}
        techStack={techStack}
        handleClose={handleClose}
      />
    </div>
  );
}
