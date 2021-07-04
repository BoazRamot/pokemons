import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";
import PokemonGame from "./PokemonGame";

const gamesColor = {
  crystal: "#4fd9ff",
  ruby: "#a00000",
  sapphire: "#0000a0",
  emerald: "#00a000",
  firered: "#ff7327",
  leafgreen: "#00dd00",
  diamond: "#aaaaff",
  pearl: "#ffaaaa",
  platinum: "#999999",
  heartgold: "#b69e00",
  soulsilver: "#c0c0e1",
  "black-2": "#444444",
  "white-2": "#e1e1e1",
};

const useStyles = makeStyles((theme) => ({
  movesRoot: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center ",
  },
}));

const PokemonGames = ({ games }) => {
  const classes = useStyles();

  return (
    <div className={classes.movesRoot}>
      {games.map((game) => (
        <PokemonGame key={game} game={game} color={gamesColor[game] || game} />
      ))}
    </div>
  );
};

export default memo(PokemonGames);
