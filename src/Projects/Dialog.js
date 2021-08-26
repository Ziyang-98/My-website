import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Close";
import Zoom from "@material-ui/core/Zoom";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
  },
  dialogTitle: {
    paddingTop: theme.spacing(2),
  },
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
}));

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
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton
          className={classes.cancel}
          onClick={handleClose}
          component="span"
        >
          <CancelIcon />
        </IconButton>

        {/*---------- Showcase Image ----------*/}
        <div className={classes.imageHolder}>
          <Carousel
            showcases={image !== null ? image.showcases : null}
            showcaseSizes={showcaseSizes}
          />
          {/* {large && (
            <img
              src={image !== null ? image.showcase : null}
              className={classes.image}
              alt="showcase"
              width={showcaseSize.large.width}
              height={showcaseSize.large.height}
            />
          )}
          {medium && (
            <img
              src={image !== null ? image.showcase : null}
              className={classes.image}
              alt="showcase"
              width={showcaseSize.medium.width}
              height={showcaseSize.medium.height}
            />
          )}
          {small && (
            <img
              src={image !== null ? image.showcase : null}
              className={classes.image}
              alt="showcase"
              width={showcaseSize.small.width}
              height={showcaseSize.small.height}
            />
          )} */}
        </div>

        {/*---------- Title ----------*/}
        <DialogTitle className={classes.dialogTitle} id="scroll-dialog-title">
          <Typography className={classes.title} variant="h4">
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
          <div className={classes.rolesHolder}>
            <DialogContentText
              id="scroll-dialog-roles"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Typography
                className={classes.roleTitle}
                variant="h5"
                color="default"
              >
                My Role:{" "}
              </Typography>
              {roles.map((role) => (
                <Typography
                  className={classes.techstack}
                  variant="body1"
                  component="p"
                  color="default"
                >
                  - {role}
                </Typography>
              ))}
            </DialogContentText>
          </div>

          {/*---------- Tech Stack ----------*/}
          <DialogContentText
            id="scroll-dialog-techStack"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography
              className={classes.techstack}
              variant="h5"
              component="p"
              color="default"
            >
              Tech Stack:
            </Typography>
            <div className={classes.iconsHolder}>
              {techStack.map((icon) => (
                <Tooltip
                  title={icon.name}
                  TransitionComponent={Zoom}
                  enterTouchDelay="50"
                >
                  <img src={icon.img} className={classes.icons} alt="icon" />
                </Tooltip>
              ))}
            </div>
          </DialogContentText>

          {/*---------- Links ----------*/}
          <div className={classes.linkHolder}>
            {links.map((link) => (
              <Button
                variant="contained"
                className={classes.linkButtons}
                target="_blank"
                color="primary"
                href={link.link}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
