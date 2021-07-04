import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";
import PokemonType from "./PokemonType";

const useStyles = makeStyles((theme) => ({
  typesRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const PokemonTypes = ({ types, typesColor }) => {
  const classes = useStyles();

  return (
    <div className={classes.typesRoot}>
      {types.map((type) => (
        <PokemonType key={type} background={typesColor[type]} type={type} />
      ))}
    </div>
  );
};

export default memo(PokemonTypes);
