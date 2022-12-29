import React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const styles = {
  root: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

const SocialMedia = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.icon}>
        <Tooltip title="Facebook" sx={styles.toolTip}>
          <Link
            href="https://www.facebook.com/lim.ziyang.12/"
            target="_blank"
            color="inherit"
          >
            <FacebookIcon size="small" />
          </Link>
        </Tooltip>
      </Box>
      <Box sx={styles.icon}>
        <Tooltip title="LinkedIn">
          <Link
            href="https://www.linkedin.com/in/zi-yang-lim-a2b651188/"
            target="_blank"
            color="inherit"
          >
            <LinkedInIcon size="small" />
          </Link>
        </Tooltip>
      </Box>
      <Box sx={styles.icon}>
        <Tooltip title="GitHub">
          <Link
            href="https://github.com/Ziyang-98"
            target="_blank"
            color="inherit"
          >
            <GitHubIcon size="small" />
          </Link>
        </Tooltip>
      </Box>
      <Box sx={styles.icon}>
        <Tooltip title="Instagram">
          <Link
            href="https://www.instagram.com/_papergoat_/?hl=en"
            target="_blank"
            color="inherit"
          >
            <InstagramIcon size="small" />
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SocialMedia;
