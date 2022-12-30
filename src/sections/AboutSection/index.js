import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "assets/profile/avatar.png";
import Icons from "./Icons";

const useStyles = (theme) => ({
  container: {
    zIndex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(20, 0),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(15),
    },
  },

  infoHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    padding: 16,
    [theme.breakpoints.down("md")]: {
      width: 450,
    },
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },

  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
  },

  image: {
    height: 400,
    width: 400,
    [theme.breakpoints.down("md")]: {
      height: 350,
      width: 350,
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
      width: 200,
    },
  },

  infoBox: {
    width: "80%",
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(5),
    },
  },

  details: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function About() {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Box sx={styles.container} id="About">
      <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
        <Box sx={styles.imageHolder}>
          <img src={Avatar} style={styles.image} alt="About Avatar" />
        </Box>
      </ScrollAnimation>
      <Box sx={styles.infoHolder}>
        <div sx={styles.infoBox}>
          <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce={true}>
            <div sx={styles.title}>
              <Typography variant="h4">About Me</Typography>
            </div>
            <div sx={styles.details}>
              <Typography variant="subtitle1">
                Hello, I'm a Year 4 Computer Science Student who is studying in
                NUS. I am passionate about various fields of computing such as
                Artificial Intelligence (A.I.) and Software Engineering. My
                specialization lies in full-stack engineering. Personally, I
                enjoy developing web applications and services. Here's are the
                languanges and frameworks that I am familiar with:
              </Typography>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={450} animateOnce={true}>
            <Box flexWrap="noWrap">
              <Icons />
            </Box>
          </ScrollAnimation>
        </div>
      </Box>
    </Box>
  );
}
