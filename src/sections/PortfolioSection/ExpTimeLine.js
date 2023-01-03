import React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Dialog from "sections/PortfolioSection/Dialog";
import SHOPEE from "sections/PortfolioSection/experiences/shopee";
import RDC from "sections/PortfolioSection/experiences/rdc";
import FRANK from "sections/PortfolioSection/experiences/frank";
import CS2030STA from "sections/PortfolioSection/experiences/cs2030sTA";
import IRAS from "sections/PortfolioSection/experiences/iras";
import CS2030TA from "sections/PortfolioSection/experiences/cs2030TA";

const useStyles = (theme) => ({
  paper: {
    padding: "8px 16px",
  },
  duration: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      flex: 0.3,
    },
  },
  icon: {
    color: theme.palette.whiteColor.main,
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
});

const experiences = [SHOPEE, RDC, FRANK, CS2030STA, IRAS, CS2030TA];

export default function ExpTimeline() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = useStyles(theme);

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

  return (
    <Timeline position={small ? "right" : "alternate"} sx={styles.timeline}>
      {experiences.map((exp) => {
        const Icon = exp.icon;
        return (
          <TimelineItem>
            <TimelineOppositeContent sx={styles.duration}>
              <Typography variant="body2" color="textSecondary">
                {exp.duration}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <IconButton
                  sx={styles.icon}
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
              <Paper elevation={4} sx={styles.paper}>
                <Typography variant="h6" component="h2">
                  {exp.jobTitle}
                </Typography>
                <Typography variant="body1" component="p" color="primary">
                  {exp.company}
                </Typography>
                <Typography
                  sx={styles.description}
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
  );
}
