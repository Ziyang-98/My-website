import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from "../Images/dp1.png";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import EmailIcon from "@material-ui/icons/Email";
import SocialMedia from "./SocialMedia";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    paddingTop: theme.spacing(8),
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    height: 700,
    zIndex: 1,
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
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  emailHolder: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(4),
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.container} id="Home">
      <Box className={classes.imageHolder}>
        <Avatar alt="Lim Zi Yang" src={ProfilePic} className={classes.avatar} />
      </Box>
      <Box className={classes.infoHolder}>
        <Box className={classes.textHolder}>
          <Chip label="Hi there, I'm" color="primary" />
          <Box className={classes.nameHolder}>
            <Typography variant="h2" className={classes.name}>
              Lim Zi Yang
            </Typography>
            <Typography variant="h5">Computer Science Student @ NUS</Typography>
            <Typography variant="h6">Contact me @</Typography>
          </Box>
          <Box className={classes.infoDescription}>
            <EmailIcon />
            <div className={classes.emailHolder}>
              <Typography variant="subtitle2">limziyang8@gmail.com</Typography>
            </div>
          </Box>
          <SocialMedia />
        </Box>
      </Box>
    </Box>
  );
}
