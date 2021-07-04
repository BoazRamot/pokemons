import React, { memo } from "react";
import { Typography, makeStyles, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  moveRoot: { margin: "0.2rem", width: "11rem" },
}));

const PokemonMove = ({ move, icon }) => {
  const classes = useStyles();

  return (
    <Chip
      avatar={icon()}
      className={classes.moveRoot}
      key={move}
      label={
        <Typography variant="button">{move.split("-").join(" ")}</Typography>
      }
    />
  );
};

export default memo(PokemonMove);
