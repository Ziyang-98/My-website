import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Avatar from "../Images/avataaars.png";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    float: "left",
    [theme.breakpoints.down("xl")]: {
      marginLeft: "35%",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "25%",
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
    },
  },

  title: {
    // marginLeft: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    // marginLeft: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  card: {
    width: 450,
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
    [theme.breakpoints.down("sm")]: {
      width: 450,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
    backgroundColor: "#e8eaf6",
  },

  duration: {
    marginBottom: theme.spacing(3),
  },

  jobscope: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontStyle: "italic",
  },
}));

/*---- My Experiences (Update here, format: {jobTitle: , description: , duration: }) ----*/
const experiences = [
  {
    jobTitle: "CS2030S Teaching Assistant",
    duration: "Aug 2020 - Present",
    description:
      "Organize and conduct scheduled sessions to teach object-oriented programming \
      and functional programming to students.",
    jobscope: [
      "Conduct scheduled sessions to facilitate learning of object-oriented/functional programming",
      "Assess assignments and give feedback to students",
      "Build students' proficiency in Java",
    ],
  },
];

export default function Experiences() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4">Work Experiences</Typography>
      </div>
      <Box className={classes.container}>
        {experiences.map((job) => (
          <Card className={classes.card} key={job.jobTitle}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {job.jobTitle}
              </Typography>
              <Typography
                className={classes.duration}
                variant="body1"
                component="p"
                color="primary"
              >
                {job.duration}
              </Typography>
              <Typography variant="body1" component="p">
                Job Scope:
              </Typography>
              {job.jobscope.map((s) => (
                <Typography
                  className={classes.jobscope}
                  variant="body2"
                  component="p"
                >
                  <li>{s}</li>
                </Typography>
              ))}
            </CardContent>
            {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        ))}
      </Box>
    </div>
  );
}
