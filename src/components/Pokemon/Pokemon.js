import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPokeItem } from "../../services/apis/pokeList";
import { getPokemonLocations } from "../../services/apis/pokemon.locations";
import { getPokemonSpecies } from "../../services/apis/pokemon.species";
import { getPokemonById } from "../../selectors/pokemonSelector";
import { getFavoriteById, getFavoritesSize } from "../../selectors/appSelector";
import { addToFavorites, removeFromFavorites } from "../../slices/appSlice";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Box,
  Typography,
  makeStyles,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PokemonContent from "./PokemonContent";
import PokemonActions from "./PokemonActions";
import { Link as RouterLink } from "react-router-dom";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    paddingTop: (props) => (props.short ? "" : "6rem"),
  },
  cardImg: {
    height: "10rem",
    width: "10rem",
  },
  cardContent: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

const Pokemon = ({ id, short = false, match }) => {
  const classes = useStyles({ short });
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

  useEffect(() => {
    if (pokemon && match) {
      dispatch(
        getPokemonLocations({
          id: match.params.id,
          url: pokemon.locationAreaEncounters,
        })
      );
      dispatch(
        getPokemonSpecies({
          id: match.params.id,
          url: pokemon.species,
        })
      );
    }
    // }, [dispatch, id, match, match?.params.id, pokemon]);
  }, []);

  const favoriteHandler = () => {
    if (favorite) {
      dispatch(removeFromFavorites(id || match.params.id));
    } else if (favoritesSize < 6) {
      dispatch(addToFavorites(pokemon));
    }
  };

  return !pokemon ? (
    <Card className={classes.cardRoot}>
      <CardContent className={classes.cardContent}>
        <img
          className={`App-logo ${classes.cardImg}`}
          src={`${process.env.PUBLIC_URL}/img/pokeball.png`}
          alt="Pokemon"
        />
      </CardContent>
    </Card>
  ) : (
    <Card className={classes.cardRoot} raised>
      <CardHeader
        title={<Typography variant="button">{pokemon.name}</Typography>}
        action={
          <IconButton onClick={favoriteHandler}>
            <StarIcon
              color={favorite ? "error" : undefined}
              // style={{ width: 60, height: 60 }}
            />
          </IconButton>
        }
      />

      <CardContent className={classes.cardContent}>
        <img
          className={classes.cardImg}
          src={pokemon.sprites?.other.dream_world.front_default}
          // src={pokemon.sprites?.front_default}
          // title={pokemon.name || `${id}`}
          title={`Press ${pokemon.name?.toUpperCase()} for full details`}
          alt="Pokemon"
          // onClick={}
        />

        {/* <Typography variant="h5" component="h2">
          {pokemon.name}
        </Typography> */}
        {!short && (
          <PokemonContent
            variant="h5"
            component="h2"
            pokemon={pokemon}
            short={short}
          />
        )}
      </CardContent>
      <CardActions>
        <RouterLink to={short ? `/pokemon/${id}` : "/"}>
          <PokemonActions
            size="small"
            color="primary"
            value={short ? "See full details" : "See All Pokemons"}
          />
        </RouterLink>
      </CardActions>
    </Card>
  );
};

export default Pokemon;
