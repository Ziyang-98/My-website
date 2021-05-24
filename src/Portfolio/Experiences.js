import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},

  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  card: {
    width: 700,
    margin: theme.spacing(0, 0, 5, 0),
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 5, 5, 5),
      width: 450,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
    backgroundColor: "#e8eaf6",
  },

  duration: {
    margin: theme.spacing(1, 0, 0, 0),
    fontStyle: "italic",
    //fontSize: 14,
  },

  description: {
    fontStyle: "italic",
    color: "#708090",
    margin: theme.spacing(2, 0, 2.5, 0),
    fontSize: 14,
  },

  jobscopeTitle: {},

  jobscope: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontStyle: "italic",
  },

  employer: {},
}));

/*---- My Experiences (Update here, format: {jobTitle: , description: , duration: }) ----*/
const experiences = [
  {
    jobTitle: "NUS Teaching Assistant",
    company: "National University of Singapore",
    duration: "Aug 2020 - Nov 2020",
    description:
      "Taught object-oriented programming " +
      "and functional programming to students in a programming module (CS2030).",
    jobscope: [
      "Conducted scheduled sessions to facilitate learning of object-oriented/functional programming",
      "Assessed assignments and gave feedback to students' code",
      "Built students' proficiency in Java",
    ],
  },
  {
    jobTitle: "Part-time Software Developer",
    company: "Inland Revenue Authority of Singapore",
    duration: "Dec 2020 - Present",
    description:
      "Worked on a Chat Bot Project, powered by Google DialogFlow, that aims to automate personalized interactions with tax payers",
    jobscope: [
      "Integrate training data and responses into the Chat Bot for tax filing feature",
      "Implement Typescript Web Hooks with NodeJS to interact with the main server",
    ],
  },
  {
    jobTitle: "NUS Teaching Assistant",
    company: "National University of Singapore",
    duration: "Jan 2021 - April 2021",
    description:
      "Taught object-oriented programming " +
      "and functional programming to students in a programming module (CS2030S).",
    jobscope: [
      "Conducted scheduled sessions to facilitate learning of object-oriented/functional programming",
      "Assessed assignments and gave feedback to students' code",
      "Built students' proficiency in Java",
    ],
  },
  {
    jobTitle: "Software Engineer Intern",
    company: "OCBC Bank",
    duration: "May 2021 - Present",
    description: "Under the OCBC@STEM Programme.",
    // "Working on an investment project on the FRANK application as a backend developer",
    jobscope: [],
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

              <Typography variant="body1" component="p" color="primary">
                {job.company}
              </Typography>

              <Typography
                className={classes.duration}
                variant="body1"
                component="p"
              >
                {job.duration}
              </Typography>
              <Typography
                className={classes.description}
                variant="caption"
                component="p"
                color="primary"
              >
                {job.description}
              </Typography>
              {job.jobscope.length > 0 && (
                <Typography
                  className={classes.jobscopeTitle}
                  variant="subtitle1"
                  component="p"
                >
                  Job Scope:
                </Typography>
              )}
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
