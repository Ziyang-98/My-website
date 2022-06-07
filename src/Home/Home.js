import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProfilePic from "../Images/Profile/dp1resized.png";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import EmailIcon from "@material-ui/icons/Email";
import SocialMedia from "./SocialMedia";
import ScrollAnimation from "react-animate-on-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "animate.css/animate.compat.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    // padding: theme.spacing(20, 0),
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    zIndex: 1,
    height: "100vh",
    // overflowY: "visible",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: theme.spacing(10, 0),
    },
  },

  infoHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
    zIndex: 1,
  },

  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
    zIndex: 1,
  },

  avatar: {
    [theme.breakpoints.down("xl")]: {
      width: theme.spacing(45),
      height: theme.spacing(45),
    },
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
    [theme.breakpoints.down("sm")]: {
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

  emailHolder: {},
}));

export default function Home({ handleToggle }) {
  const classes = useStyles();
  const theme = useTheme();
  const mobileVP = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box className={classes.container} id="Home">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={750}>
        <Box className={classes.imageHolder}>
          <Avatar
            alt="Lim Zi Yang"
            src={ProfilePic}
            className={classes.avatar}
          />
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce={true}>
        <Box className={classes.infoHolder}>
          <Box className={classes.textHolder}>
            <Chip
              label={
                <Typography
                  variant="subtitle1"
                  className={classes.introduction}
                >
                  Hello, I'm
                </Typography>
              }
              color="primary"
              onClick={handleToggle}
            />
            <Box className={classes.nameHolder}>
              <Typography
                variant={mobileVP ? "h3" : "h2"}
                className={classes.name}
              >
                Lim Zi Yang
              </Typography>
              <Typography variant="h5" className={classes.occupation}>
                Computer Science Student @ NUS
              </Typography>
            </Box>
            <Box className={classes.infoDescription}>
              <EmailIcon />
              <div className={classes.emailHolder}>
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
