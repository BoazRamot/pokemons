import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Pokemon from "../components/Pokemon/Pokemon";
import {
  Paper,
  Grid,
  makeStyles,
  Fab,
  Link,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  getAllFavoritesIdArray,
  getFavoritesSize,
} from "../selectors/appSelector";

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    flexGrow: 1,
    padding: "6rem 1rem 1rem 1rem",
    display: (props) => !props.favoritesSize && "flex",
    justifyContent: (props) => !props.favoritesSize && "center",
    alignItems: (props) => !props.favoritesSize && "center",
  },
}));

const Favorites = () => {
  const { favorites, favoritesSize = 0 } = useSelector(
    (state) => ({
      favorites: getAllFavoritesIdArray(state),
      favoritesSize: getFavoritesSize(state),
    }),
    shallowEqual
  );
  const classes = useStyles({ favoritesSize });

  if (favoritesSize === 0) {
    return (
      <Paper className={classes.pageRoot}>
        <Fab variant="extended">
          <Link component={RouterLink} to={"/pokemons"}>
            <Typography variant="h6">
              There are no pokemones on your favorite list. click here to choose
              some!
            </Typography>
          </Link>
        </Fab>
      </Paper>
    );
  }

  return (
    <Paper className={classes.pageRoot}>
      <Grid container spacing={3}>
        {favorites.map((item) => (
          <Grid item xs={12} sm={6} md={3} xl={3} key={item}>
            <Tilt>
              <Pokemon id={item} short={true} isfavorite={true} />
            </Tilt>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Favorites;
