import React, { useMemo, memo } from "react";
import Pokemon from "../components/Pokemon/Pokemon";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Tilt from "react-parallax-tilt";

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    flexGrow: 1,
    padding: "6rem 1rem 1rem 1rem",
  },
}));

const pokemonsArray = Array(151).fill();

const Pokemons = () => {
  const classes = useStyles();
  const pokemons = useMemo(
    () =>
      pokemonsArray.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} xl={3} key={index + 1}>
          <Tilt>
            <Pokemon id={index + 1} short={true} />
          </Tilt>
        </Grid>
      )),
    []
  );
  return (
    <Paper className={classes.pageRoot}>
      <Grid container spacing={3}>
        {pokemons}
      </Grid>
    </Paper>
  );
};

export default memo(Pokemons);
