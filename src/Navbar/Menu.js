import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Info";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#FFFFFF",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    width: theme.spacing(25),
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        edge="start"
        aria-label="menu"
      >
        <MenuIcon className={classes.icon} />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          className="toHome"
          color="inherit"
          style={{ textDecoration: "none" }}
          to="Home"
          smooth={true}
          duration={1000}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </StyledMenuItem>
        </Link>

        <Link
          className="toAbout"
          color="inherit"
          style={{ textDecoration: "none" }}
          to="About"
          smooth={true}
          duration={1000}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <AboutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </StyledMenuItem>
        </Link>

        <Link
          className="toPortfolio"
          color="inherit"
          style={{ textDecoration: "none" }}
          to="Portfolio"
          smooth={true}
          duration={1000}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <AccountBoxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </StyledMenuItem>
        </Link>

        <Link
          className="toProjects"
          color="inherit"
          style={{ textDecoration: "none" }}
          to="Projects"
          smooth={true}
          duration={1000}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <EmojiObjectsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
