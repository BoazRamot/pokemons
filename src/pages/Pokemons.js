import React from "react";
// import { useSelector } from "react-redux";
import Pokemon from "../components/Pokemon/Pokemon";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Tilt from "react-parallax-tilt";

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    paddingTop: "6rem",
  },
}));

const Pokemons = () => {
  const classes = useStyles();

  // const pokeList = useSelector((state) => state.pokemon.poke);

  return (
    <Paper>
      <Grid container spacing={3} className={classes.pageRoot}>
        {Array(151)
          .fill()
          .map((item, index) => (
            <Grid item xs={3} key={index + 1}>
              <Tilt>
                <Pokemon id={index + 1} short={true} />
              </Tilt>
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default Pokemons;
