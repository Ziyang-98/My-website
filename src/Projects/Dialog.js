import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Zoom from "@material-ui/core/Zoom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  imageHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
  },

  // image: {
  //   width: 750,
  //   height: 180,
  //   [theme.breakpoints.down("sm")]: {
  //     width: 550,
  //     height: 140,
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     width: 400,
  //     height: 100,
  //   },
  // },
  dialogTitle: {
    paddingTop: theme.spacing(2),
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cancel: {
    cursor: "pointer",
    position: "absolute",
    float: "right",
    top: "0",
    // marginRight: "95%",
    right: "0",
  },
  title: {
    // fontWeight: 550,
    // fontStyle: "italic",
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
  icons: {
    height: 40,
    width: 40,
    marginRight: theme.spacing(2),
  },
  linkHolder: {
    marginTop: theme.spacing(5),
  },
  linkButtons: {
    margin: theme.spacing(1),
  },
}));

export default function ScrollDialog({
  open,
  title,
  image,
  showcaseSize,
  description,
  roles,
  links,
  techStack,
  handleClose,
}) {
  // Breakpoints to resize showcase
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("md"));
  const medium = useMediaQuery(theme.breakpoints.only("sm"));
  const small = useMediaQuery(theme.breakpoints.only("xs"));

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
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button> */}
      {/* <Button onClick={handleClickOpen}>scroll=body</Button> */}
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
          {large && (
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
          )}
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

          {/*---------- My Role ----------*/}
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
            {techStack.map((icon) => (
              <Tooltip
                title={icon.name}
                TransitionComponent={Zoom}
                enterTouchDelay="50"
              >
                <img src={icon.img} className={classes.icons} alt="icon" />
              </Tooltip>
            ))}
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
