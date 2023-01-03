import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollAnimation from "react-animate-on-scroll";
import ProfilePic from "assets/profile/dp.jpeg";
import SocialMedia from "./SocialMedia";

import "animate.css/animate.compat.css";

const useStyles = (theme) => ({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    zIndex: 1,
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      padding: "96px",
    },
  },
  infoHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    zIndex: 1,
  },

  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    zIndex: 1,
  },

  avatar: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    [theme.breakpoints.down("lg")]: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(35),
      height: theme.spacing(35),
    },
    zIndex: 1,
  },

  textHolder: {
    zIndex: 1,
  },
  introduction: {
    color: theme.palette.whiteColor.main,
  },

  nameHolder: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  name: {
    fontWeight: 400,
  },

  occupation: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  infoDescription: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default function Home({ handleToggle }) {
  const theme = useTheme();
  const styles = useStyles(theme);
  const mobileVP = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.container} id="Home">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={750}>
        <Box sx={styles.imageHolder}>
          <Avatar alt="Lim Zi Yang" src={ProfilePic} sx={styles.avatar} />
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce={true}>
        <Box sx={styles.infoHolder}>
          <Box sx={styles.textHolder}>
            <Chip
              label={
                <Typography variant="subtitle1" sx={styles.introduction}>
                  Hello, I'm
                </Typography>
              }
              color="primary"
              onClick={handleToggle}
            />
            <Box sx={styles.nameHolder}>
              <Typography variant={mobileVP ? "h3" : "h2"} sx={styles.name}>
                Lim Zi Yang
              </Typography>
              <Typography variant="h5" sx={styles.occupation}>
                Computer Science Student @ NUS
              </Typography>
            </Box>
            <Box sx={styles.infoDescription}>
              <EmailIcon />
              <div sx={styles.emailHolder}>
                <Typography variant="subtitle2">
                  limziyang8@gmail.com
                </Typography>
              </div>
            </Box>

            <SocialMedia />
          </Box>
        </Box>
      </ScrollAnimation>
    </Box>
  );
}
