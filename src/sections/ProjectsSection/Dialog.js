import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Close";
import Zoom from "@mui/material/Zoom";
import Carousel from "./Carousel";

const useStyles = (theme) => ({
  imageHolder: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  dialogTitle: {},
  cancel: {
    position: "absolute",
    right: theme.spacing(0.1),
    top: theme.spacing(0.1),
    color: theme.palette.grey[500],
  },
  title: {
    fontSize: 50,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },

  rolesHolder: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  roleTitle: {
    marginBottom: theme.spacing(2),
  },
  techstack: {
    marginBottom: theme.spacing(2),
  },
  iconsHolder: {
    display: "flex",
    flexWrap: "wrap",
  },
  icons: {
    height: 40,
    width: 40,
    margin: theme.spacing(1),
  },
  linkHolder: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  linkButtons: {
    margin: theme.spacing(1),
  },
});

export default function ScrollDialog({
  open,
  title,
  image,
  showcaseSizes,
  description,
  roles,
  links,
  techStack,
  handleClose,
}) {
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton sx={styles.cancel} onClick={handleClose} component="span">
          <CancelIcon />
        </IconButton>

        {/*---------- Showcase Image ----------*/}
        <Box sx={styles.imageHolder}>
          <Carousel
            showcases={image !== null ? image.showcases : null}
            showcaseSizes={showcaseSizes}
          />
        </Box>

        {/*---------- Title ----------*/}
        <DialogTitle sx={styles.dialogTitle} id="scroll-dialog-title">
          <Typography sx={styles.title} variant="h4">
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          {/*---------- Description ----------*/}
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {description}
          </DialogContentText>

          {/*---------- My Roles ----------*/}
          <Box sx={styles.rolesHolder}>
            <DialogContentText
              id="scroll-dialog-roles"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Typography sx={styles.roleTitle} variant="h5" color="default">
                My Role:{" "}
              </Typography>
              <ul>
                {roles.map((role) => (
                  <li>
                    <Typography
                      sx={styles.techstack}
                      variant="body1"
                      component="p"
                      color="default"
                    >
                      {role}
                    </Typography>
                  </li>
                ))}
              </ul>
            </DialogContentText>
          </Box>

          {/*---------- Tech Stack ----------*/}
          <DialogContentText
            id="scroll-dialog-techStack"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography
              sx={styles.techstack}
              variant="h5"
              component="p"
              color="default"
            >
              Tech Stack:
            </Typography>
            <Box sx={styles.iconsHolder}>
              {techStack.map((icon) => (
                <Tooltip
                  title={icon.name}
                  TransitionComponent={Zoom}
                  enterTouchDelay="50"
                >
                  <img src={icon.img} style={styles.icons} alt="icon" />
                </Tooltip>
              ))}
            </Box>
          </DialogContentText>

          {/*---------- Links ----------*/}
          <Box sx={styles.linkHolder}>
            {links.map((link) => (
              <Button
                variant="contained"
                sx={styles.linkButtons}
                target="_blank"
                color="primary"
                href={link.link}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
