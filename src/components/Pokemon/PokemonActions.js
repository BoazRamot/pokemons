import React from "react";
import { Button } from "@material-ui/core";

const PokemonActions = ({ size, color, onClick, value }) => {
  return (
    <Button size={size} color={color} onClick={onClick}>
      {value}
    </Button>
  );
};

export default PokemonActions;
