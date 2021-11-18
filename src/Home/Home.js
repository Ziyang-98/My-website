import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from "../Images/Profile/dp1.png";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import EmailIcon from "@material-ui/icons/Email";
import SocialMedia from "./SocialMedia";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: theme.spacing(20, 0),
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    flexGrow: 1,
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(10),
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

  infoDescription: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  emailHolder: {},
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.container} id="Home">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={700}>
        <Box className={classes.imageHolder}>
          <Avatar
            alt="Lim Zi Yang"
            src={ProfilePic}
            className={classes.avatar}
          />
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={400} animateOnce={true}>
        <Box className={classes.infoHolder}>
          <Box className={classes.textHolder}>
            <Chip label="Hi there, I'm" color="primary" />
            <Box className={classes.nameHolder}>
              <Typography variant="h2" className={classes.name}>
                Lim Zi Yang
              </Typography>
              <Typography variant="h5">
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
