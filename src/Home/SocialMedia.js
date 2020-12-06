import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    // [theme.breakpoints.down("sm")]: {
    // marginLeft: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // },
  },

  icon: {
    margin: theme.spacing(0, 2),
    float: "left",
    marginTop: "0",
    marginBottom: "0",
    padding: "0",
  },

  toolTip: {
    margin: theme.spacing(0),
  },
}));

const SocialMedia = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <Tooltip title="Facebook" className={classes.toolTip}>
          <Link
            href="https://www.facebook.com/lim.ziyang.12/"
            target="_blank"
            color="inherit"
          >
            <FacebookIcon size="small" />
          </Link>
        </Tooltip>
      </div>
      <div className={classes.icon}>
        <Tooltip title="LinkedIn">
          <Link
            href="https://www.linkedin.com/in/zi-yang-lim-a2b651188/"
            target="_blank"
            color="inherit"
          >
            <LinkedInIcon size="small" />
          </Link>
        </Tooltip>
      </div>
      <div className={classes.icon}>
        <Tooltip title="GitHub">
          <Link
            href="https://github.com/Ziyang-98"
            target="_blank"
            color="inherit"
          >
            <GitHubIcon size="small" />
          </Link>
        </Tooltip>
      </div>
      <div className={classes.icon}>
        <Tooltip title="Instagram">
          <Link
            href="https://www.instagram.com/_papergoat_/?hl=en"
            target="_blank"
            color="inherit"
          >
            <InstagramIcon size="small" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default SocialMedia;
