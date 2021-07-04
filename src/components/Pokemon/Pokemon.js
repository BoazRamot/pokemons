import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPokemonLocations } from "../../services/apis/pokemon.locations";
import { getPokemonSpecies } from "../../services/apis/pokemon.species";
import { getPokemonById } from "../../selectors/pokemonSelector";
import { getFavoriteById, getFavoritesSize } from "../../selectors/appSelector";
import { addToFavorites, removeFromFavorites } from "../../slices/appSlice";
import {
  Card,
  CardContent,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PokemonActions from "./PokemonActions";
import PokemonTypes from "./PokemonTypes";
import PokemonData from "./PokemonData/PokemonData";
import AddToFavorits from "./AddToFavorits";
import PokemonName from "./PokemonName";
import Pokeball from "./Pokeball";
import Player from "../Player/Player";

const typesColor = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#F0B6BC",
};

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    flexGrow: 1,
    paddingTop: (props) => (props.short ? "" : "6rem"),
    background: (props) =>
      props.types
        ? props.types.length > 1
          ? `linear-gradient(${props.types
              .map((item) => props.typesColor[item])
              .toString()})`
          : props.typesColor[props.types[0]]
        : "",
  },
  cardImg: {
    marginTop: "1rem",
    height: "10rem",
    width: "10rem",
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

const Pokemon = ({ id, short = false, isfavorite = false, match }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between(0, "xs"));
  const dispatch = useDispatch();
  const {
    pokemon = 0,
    favorite = 0,
    favoritesSize = 0,
  } = useSelector(
    (state) => ({
      pokemon: getPokemonById(state, id || match.params.id),
      favorite: getFavoriteById(state, id || match.params.id),
      favoritesSize: getFavoritesSize(state),
    }),
    shallowEqual
  );

  const classes = useStyles({ short, types: pokemon.types, typesColor });

  useEffect(() => {
    if (pokemon && match) {
      if (!Array.isArray(pokemon.locationAreaEncounters)) {
        dispatch(
          getPokemonLocations({
            id: match.params.id,
            url: pokemon.locationAreaEncounters,
          })
        );
      }
      if (!Array.isArray(pokemon.species)) {
        dispatch(
          getPokemonSpecies({
            id: match.params.id,
            url: pokemon.species,
          })
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const favoriteHandler = () => {
    if (favorite) {
      dispatch(removeFromFavorites(id || match.params.id));
    } else if (favoritesSize < 6) {
      dispatch(addToFavorites(pokemon));
    }
  };

  return !pokemon ? (
    <Pokeball />
  ) : (
    <Card className={classes.cardRoot} raised>
      <CardContent className={classes.cardContent}>
        <AddToFavorits clickHandler={favoriteHandler} favorite={favorite} />
        <img
          className={classes.cardImg}
          src={pokemon.sprites?.other.dream_world.front_default}
          title={pokemon.name || `${id}`}
          alt="Pokemon"
        />
        <PokemonName
          short={short}
          id={Number(id || match.params.id)}
          name={pokemon.name}
        />
        <PokemonTypes types={pokemon.types} typesColor={typesColor} />
        {!short && <Player url={pokemon.cry} text={"The Pokemon Cry"} />}
        <PokemonData short={short} pokemon={pokemon} matches={matches} />
        <PokemonActions isfavorite={isfavorite} short={short} id={id} />
      </CardContent>
    </Card>
  );
};

export default memo(Pokemon);
