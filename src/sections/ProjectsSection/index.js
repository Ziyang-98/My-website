import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import ModPlanner from "./projects/Modplanner";
import Bob from "./projects/Bob";
import CommonCents from "./projects/CommonCents";
import Coffeeberry from "./projects/Coffeeberry";
import CoralReefConservation from "./projects/CoralReefConservation";
import JobTrack from "./projects/JobTrack";
import Dialog from "./Dialog";

const useStyles = (theme) => ({
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
  },
  outerGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 320,
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
});

const projects = [
  JobTrack,
  CoralReefConservation,
  Coffeeberry,
  CommonCents,
  Bob,
  ModPlanner,
];

export default function Portfolio() {
  const theme = useTheme();
  const styles = useStyles(theme);
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
  // let delay = 100;
  // const addOnDelay = 100;
  // const descriptionDelay = delay + addOnDelay * projects.length + delay;

  return (
    <Box sx={styles.container} id="Projects">
      <Box sx={styles.titleHolder}>
        <Typography variant={mobileVP ? "h4" : "h3"}>My Projects</Typography>
      </Box>
      <Box sx={styles.descriptionHolder}>
        <Typography variant="body1" sx={styles.description}>
          Click on each card to find out more
        </Typography>
      </Box>
      <Container sx={styles.cardGrid} maxWidth="md">
        <Grid container sx={styles.outerGrid} spacing={2}>
          {projects.map((project) => (
            <Grid item>
              <Card sx={styles.card} elevation={2}>
                <CardActionArea
                  sx={styles.cardClickable}
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
                  <CardMedia sx={styles.cardMedia} title="Image title">
                    <img
                      sx={styles.image}
                      src={project.image.preview}
                      alt="showcase"
                      width={project.previewSize.width}
                      height={project.previewSize.height}
                    />
                  </CardMedia>
                  <CardContent sx={styles.cardContent}>
                    <Box sx={styles.cardTitleHolder}>
                      <Typography gutterBottom variant="h5" component="span">
                        {project.title}
                        {project.image.logo && (
                          <img
                            style={styles.logo}
                            src={project.image.logo}
                            alt="logo"
                          />
                        )}
                      </Typography>
                    </Box>
                    <Typography component="p">
                      {project.shortDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
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
    </Box>
  );
}
