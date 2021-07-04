import React, { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { CardActions, Fab, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  actionsRoot: {
    marginTop: "0.5rem",
  },
}));

const PokemonActions = ({ isfavorite, short, id }) => {
  const classes = useStyles();

  return (
    <CardActions className={classes.actionsRoot}>
      <Fab variant="extended">
        {isfavorite && (
          <Link
            component={RouterLink}
            to={short ? `/pokemon/${id}` : "/favorites"}
          >
            {short ? "show me more" : "back to favorite pokemons"}
          </Link>
        )}
        {!isfavorite && (
          <Link
            component={RouterLink}
            to={short ? `/pokemon/${id}` : "/pokemons"}
          >
            {short ? "show me more" : "back to pokemons"}
          </Link>
        )}
      </Fab>
    </CardActions>
  );
};

export default memo(PokemonActions);
