import React, { memo } from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playerRoot: {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
  },
  typography: {
    color: "white",
    marginRight: "1rem",
  },
}));

const Player = ({ url, text, isStartPlay = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.playerRoot}>
      <Typography className={classes.typography}>{text}</Typography>
      <audio src={url} controls autoPlay={isStartPlay} />
    </div>
  );
};

export default memo(Player);
