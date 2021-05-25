import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ModPlanner from "./My Projects/Modplanner";
import Bob from "./My Projects/Bob";
import CommonCents from "./My Projects/CommonCents";
import Coffeeberry from "./My Projects/Coffeeberry";
import Dialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 750,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(15),
  },

  titleHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
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
  cardMedia: {
    marginTop: "10%",
    marginBottom: "10%",
    height: 75,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // height: "100%",
    // width: "100%",
  },
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

const projects = [ModPlanner, Bob, CommonCents, Coffeeberry];

export default function Portfolio() {
  const classes = useStyles();
  const showcaseStub = {
    large: { width: 0, height: 0 },
    medium: { width: 0, height: 0 },
    small: { width: 0, height: 0 },
  };

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [showcaseSize, setShowcaseSize] = React.useState(showcaseStub);
  const [image, setImage] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [roles, setRoles] = React.useState([]);
  const [links, setLinks] = React.useState([]);
  const [techStack, setTechStack] = React.useState([]);

  const handleClick = (
    title,
    image,
    showcaseSize,
    description,
    roles,
    links,
    techStack
  ) => {
    setOpen(true);
    setTitle(title);
    setShowcaseSize(showcaseSize);
    setImage(image);
    setDescription(description);
    setRoles(roles);
    setLinks(links);
    setTechStack(techStack);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.container} id="Projects">
      <Box className={classes.titleHolder}>
        <Typography variant="h3">My Projects</Typography>
      </Box>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container className={classes.outerGrid} spacing={2}>
          {projects.map((project) => (
            <Grid item>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} title="Image title">
                  <img
                    className={classes.image}
                    src={project.image.display}
                    alt="showcase"
                    width={project.displaySize.width}
                    height={project.displaySize.height}
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
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      handleClick(
                        project.title,
                        project.image,
                        project.showcaseSize,
                        project.description,
                        project.roles,
                        project.links,
                        project.techStack
                      )
                    }
                    className={classes.cardButton}
                  >
                    More Info
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Dialog
        open={open}
        title={title}
        image={image}
        showcaseSize={showcaseSize}
        description={description}
        roles={roles}
        links={links}
        techStack={techStack}
        handleClose={handleClose}
      />
    </div>
  );
}
