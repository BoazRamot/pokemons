import React, { memo } from "react";
import { Typography, makeStyles, Chip } from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";

const useStyles = makeStyles((theme) => ({
  gameRoot: { margin: "0.2rem", width: "11rem" },
}));

const PokemonGame = ({ game, color }) => {
  const classes = useStyles();

  return (
    <Chip
      className={classes.gameRoot}
      avatar={<LensIcon style={{ color: color || `${game}` }} />}
      label={<Typography variant="button">{game}</Typography>}
    />
  );
};

export default memo(PokemonGame);
