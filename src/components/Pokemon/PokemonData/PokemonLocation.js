import React, { memo } from "react";
import { Typography, makeStyles, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  locationRoot: { margin: "0.2rem", width: "11rem" },
}));

const PokemonLocation = ({ location, icon }) => {
  const classes = useStyles();

  return (
    <Chip
      avatar={icon()}
      className={classes.locationRoot}
      label={
        <Typography variant="button">
          {location.split("-").join(" ")}
        </Typography>
      }
    />
  );
};

export default memo(PokemonLocation);
