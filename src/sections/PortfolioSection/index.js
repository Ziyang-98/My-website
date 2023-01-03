import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Exp from "./ExpTimeLine";
import ScrollAnimation from "react-animate-on-scroll";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = (theme) => ({
  container: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    zIndex: 1,
  },

  titleHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  infoHolder: {
    paddingTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  description: {
    color: "#bbbbbf",
  },
});

export default function Portfolio() {
  const theme = useTheme();
  const styles = useStyles(theme);
  const mobileVP = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box sx={styles.container} id="Portfolio">
      <Box sx={styles.titleHolder}>
        <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce={true}>
          <Typography variant={mobileVP ? "h4" : "h3"}>
            My Experiences
          </Typography>
        </ScrollAnimation>
      </Box>
      <Box sx={styles.infoHolder}>
        <ScrollAnimation animateIn="fadeIn" delay={800} animateOnce={true}>
          <Typography variant="body1" sx={styles.description}>
            Click on each icon to find out more
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={450} animateOnce={true}>
          <Box sx={styles.expHolder} id="Experiences">
            <Exp />
          </Box>
        </ScrollAnimation>
      </Box>
    </Box>
  );
}

/*
    Experiences can be featured in a table,

    Achievements can be featured in a table,

    Projects can be features in a form of card medias
*/
