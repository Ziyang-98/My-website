import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "assets/profile/avatar.png";
import Icons from "./Icons";

const useStyles = (theme) => ({
  container: {
    zIndex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(15, 0, 20, 0),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
    },
  },

  infoHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "28px",
    width: 450,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },

  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "28px",
    [theme.breakpoints.down("sm")]: {
      width: 450,
    },
  },

  image: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  details: {
    marginTop: theme.spacing(2),
  },
});

export default function About() {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.container} id="About">
      <Box sx={styles.imageHolder}>
        <Avatar alt="About Avatar" src={AvatarImg} sx={styles.image} />
      </Box>
      <Box sx={styles.infoHolder}>
        <Box>
          <Box sx={styles.title}>
            <Typography variant="h4">About Me</Typography>
          </Box>
          <Box sx={styles.details}>
            <Typography variant="subtitle1">
              Hi there, my name is Lim Zi Yang. I graduated from the National
              University of Singapore with a Bachelors in Computing{" "}
              {"(Computer Science)"} in 2023 and I'm currently Full-Stack
              Software Engineer working at DSTA Singapore. I'm a tech enthusiast
              and I enjoy keeping up with the latest trends of Artificial
              Intelligence (A.I.) and Software Engineering. Apart from work, I
              like to work on my personal projects, developing web applications
              and services for leisure and exposure. Here are the programming
              languanges and frameworks that I am familiar with:
            </Typography>
          </Box>

          <Box flexWrap="noWrap">
            <Icons />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
