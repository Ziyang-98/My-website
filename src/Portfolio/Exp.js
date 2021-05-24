import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import OCBC from "./Experiences/ocbc";
import CS2030STA from "./Experiences/cs2030sTA";
import IRAS from "./Experiences/iras";
import CS2030TA from "./Experiences/cs2030TA";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: "6px 16px",
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main,
//   },
//   description: {
//     fontStyle: "italic",
//     color: "#708090",
//     margin: theme.spacing(2, 0, 2.5, 0),
//     fontSize: 14,
//   },
//   jobscope: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//     fontStyle: "italic",
//   },
// }));

export default function ExpTimeline() {
  // const classes = useStyles();

  return (
    <Timeline align="alternate">
      <OCBC />
      <CS2030STA />
      <IRAS />
      <CS2030TA />
    </Timeline>
  );
}
