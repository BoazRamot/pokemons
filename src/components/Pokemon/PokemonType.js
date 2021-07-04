import React, { memo } from "react";
import { Typography, makeStyles, Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typeRoot: {
    background: (props) => props.background,
  },
  typeTypography: {
    color: "white",
  },
}));

const PokemonType = ({ background, type }) => {
  const classes = useStyles({ background });

  return (
    <Fab className={classes.typeRoot} variant="extended">
      <Typography className={classes.typeTypography} variant="subtitle1">
        {type}
      </Typography>
    </Fab>
  );
};

export default memo(PokemonType);
