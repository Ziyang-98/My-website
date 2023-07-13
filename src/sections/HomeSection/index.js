import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from "@mui/material/Fade";
import VizSensor from "react-visibility-sensor";
import ProfilePic from "assets/profile/dp.jpg";
import SocialMedia from "./SocialMedia";

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
      width: "380px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
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
  let [visible, setVisible] = useState(false);

  return (
    <VizSensor
      onChange={() => {
        setVisible(true);
      }}
    >
      <Box sx={styles.container} id="Home">
        <Fade in={visible} timeout={900} style={{ transitionDelay: `300ms` }}>
          <Box sx={styles.imageHolder}>
            <Avatar alt="Lim Zi Yang" src={ProfilePic} sx={styles.avatar} />
          </Box>
        </Fade>
        <Fade in={visible} timeout={900}>
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
                  Software Engineer @ DSTA Singapore
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
        </Fade>
      </Box>
    </VizSensor>
  );
}
