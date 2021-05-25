import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import OCBC from "./Experiences/OCBC";
import CS2030STA from "./Experiences/CS2030STA";
import IRAS from "./Experiences/IRAS";
import CS2030TA from "./Experiences/CS2030TA";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "./Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  duration: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      flex: 0.3,
    },
  },
  icon: {
    color: "#FFFFFF",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  description: {
    fontStyle: "italic",
    color: "#708090",
    margin: theme.spacing(2, 0, 1, 0),
    fontSize: 14,
  },
  jobscope: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontStyle: "italic",
  },
}));

const experiences = [OCBC, CS2030STA, IRAS, CS2030TA];

export default function ExpTimeline() {
  const classes = useStyles();

  // Last item (Assumes that experiences already has items)
  const lastItem = experiences[experiences.length - 1];

  const [open, setOpen] = React.useState(false);
  const [jobTitle, setJobTitle] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [jobscope, setJobscope] = React.useState("");

  const handleClick = (jobTitle, company, duration, description, jobscope) => {
    setJobTitle(jobTitle);
    setCompany(company);
    setDuration(duration);
    setDescription(description);
    setJobscope(jobscope);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      {small ? (
        // Timeline content aligns left if window is small
        <Timeline align="left" className={classes.timeline}>
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <TimelineItem>
                <TimelineOppositeContent className={classes.duration}>
                  <Typography variant="body2" color="textSecondary">
                    {exp.duration}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <IconButton
                      className={classes.icon}
                      onClick={() =>
                        handleClick(
                          exp.jobTitle,
                          exp.company,
                          exp.duration,
                          exp.description,
                          exp.jobscope
                        )
                      }
                    >
                      <Icon />
                    </IconButton>
                  </TimelineDot>
                  {lastItem !== exp && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h2">
                      {exp.jobTitle}
                    </Typography>

                    <Typography variant="body1" component="p" color="primary">
                      {exp.company}
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="caption"
                      component="p"
                      color="primary"
                    >
                      {exp.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            );
          })}
          <Dialog
            open={open}
            jobTitle={jobTitle}
            company={company}
            duration={duration}
            description={description}
            jobscope={jobscope}
            handleClose={handleClose}
          />
        </Timeline>
      ) : (
        // Timeline content alternates by default
        <Timeline align="alternate" className={classes.timeline}>
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <TimelineItem>
                <TimelineOppositeContent className={classes.duration}>
                  <Typography variant="body2" color="textSecondary">
                    {exp.duration}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <IconButton
                      className={classes.icon}
                      onClick={() =>
                        handleClick(
                          exp.jobTitle,
                          exp.company,
                          exp.duration,
                          exp.description,
                          exp.jobscope
                        )
                      }
                    >
                      <Icon />
                    </IconButton>
                  </TimelineDot>
                  {lastItem !== exp && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h2">
                      {exp.jobTitle}
                    </Typography>

                    <Typography variant="body1" component="p" color="primary">
                      {exp.company}
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="caption"
                      component="p"
                      color="primary"
                    >
                      {exp.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            );
          })}
          <Dialog
            open={open}
            jobTitle={jobTitle}
            company={company}
            duration={duration}
            description={description}
            jobscope={jobscope}
            handleClose={handleClose}
          />
        </Timeline>
      )}
    </div>
  );
}
