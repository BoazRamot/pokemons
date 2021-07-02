import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LightIcon from "@material-ui/icons/Brightness7";
import DarkIcon from "@material-ui/icons/Brightness4";
import FormatTextdirectionRToLIcon from "@material-ui/icons/FormatTextdirectionRToL";
import FormatTextdirectionLToRIcon from "@material-ui/icons/FormatTextdirectionLToR";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingBottom: "4rem",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      position: "fixed",
      left: 0,
      top: 0,
    },
  })
);

const Header = ({ darkModeHandler, isDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleLoginDialogOpen = () => {
    // signInDialogOpen();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("boards-token");
    // logoutUser();
    // resetRedirect();
  };

  // const handleHome = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div
    // style={{ display: pageNotFound ? "none" : "" }}
    // className={classes.root}
    >
      {/* <AppBar className={classes.appBar}> */}
      <AppBar color="inherit">
        <Toolbar>
          {/* <RouterLink to={`/`}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              // onClick={handleHome}
            >
              <Typography
                variant="h6"
                className={classes.title}
                style={{ color: "white", marginRight: "7px" }}
              >
                Boards
              </Typography>
            </IconButton>
          </RouterLink> */}

          <div className={classes.title}></div>
          <IconButton onClick={darkModeHandler}>
            {isDarkMode ? <LightIcon /> : <DarkIcon />}
          </IconButton>

          <IconButton
            edge="end"
            className={classes.menuButton}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {/* {userLogin ? (
              <Avatar alt={userName} src={avatar} />
            ) : ( */}
            <AccountCircle />
            {/* )} */}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            {/* {userLogin ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : ( */}
            <MenuItem onClick={handleLoginDialogOpen}>Login</MenuItem>
            {/* )} */}
            <MenuItem
              // style={{ display: userLogin ? "" : "none" }}
              onClick={handleClose}
            >
              Profile
            </MenuItem>
            <MenuItem
              // style={{ display: userLogin ? "" : "none" }}
              onClick={handleClose}
            >
              My account
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
