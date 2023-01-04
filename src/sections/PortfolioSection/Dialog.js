import React from "react";
import { withStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

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
        <Typography variant="body1" component="p" color="text.secondary">
          {duration}
        </Typography>
      </DialogTitle>
      <DialogContent>
        {jobscope
          ? jobscope.map((role) => (
              <div>
                <Typography variant="body2">
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
