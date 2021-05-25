import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(0.1),
    top: theme.spacing(0.1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs({
  open,
  jobTitle,
  company,
  duration,
  description,
  jobscope,
  handleClose,
}) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography variant="h4">{jobTitle}</Typography>
        <Typography variant="h6" component="p" color="primary">
          {company}
        </Typography>
        <Typography variant="body1" component="p">
          {duration}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography gutterBottom>{description}</Typography>
        <br />
        {jobscope
          ? jobscope.map((role) => (
              <div>
                <Typography variant="body2" gutterBottom>
                  <li>{role}</li>
                </Typography>
                <br />
              </div>
            ))
          : null}
      </DialogContent>
    </Dialog>
  );
}
