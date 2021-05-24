import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  content: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  duration: {
    marginTop: theme.spacing(2),
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
}));

export default function IRAS() {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.duration}>
        <Typography variant="body2" color="textSecondary">
          December 2020 - January 2021
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <IconButton className={classes.icon}>
            <AttachMoneyIcon />
          </IconButton>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.content}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h2">
            Part-time Software Developer
          </Typography>

          <Typography variant="body1" component="p" color="primary">
            Inland Revenue Authority of Singapore
          </Typography>
          <Typography
            className={classes.description}
            variant="caption"
            component="p"
            color="primary"
          >
            Worked on a Chatbot Project that aims to automate personalized
            interactions with tax payers
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}
