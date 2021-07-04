import React, { memo } from "react";
import {
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PokemonMoves from "./PokemonMoves";
import PokemonLocations from "./PokemonLocations";
import PokemonGames from "./PokemonGames";
import PokemonEvolutionChain from "./PokemonEvolutionChain";
import Pokeball from "../Pokeball";

const useStyles = makeStyles((theme) => ({
  dataRoot: {
    width: "100%",
  },
  accordion: {
    backgroundColor: "transparent",
  },
}));

const PokemonData = ({ short = false, pokemon, matches }) => {
  const classes = useStyles();

  return short ? null : (
    <div className={classes.dataRoot}>
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Moves</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PokemonMoves moves={pokemon.moves} />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Games</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PokemonGames games={pokemon.gameIndices} />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Location Area Encounters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Array.isArray(pokemon.locationAreaEncounters) ? (
            <PokemonLocations
              locationAreaEncounters={pokemon.locationAreaEncounters}
            />
          ) : (
            <Pokeball />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Evolution Chain</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PokemonEvolutionChain pokemon={pokemon} matches={matches} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default memo(PokemonData);
