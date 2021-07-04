import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokeList } from "./services/apis/pokeList";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/Header/Header";
import Pokemons from "./pages/Pokemons";
import Favorites from "./pages/Favorites";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexFlow: "column nowrap",
  },
}));

function App() {
  const classes = useStyles();
  const from = useSelector((state) => state.pokemon.from);
  const to = useSelector((state) => state.pokemon.to);
  const dispatch = useDispatch();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
        },
      }),
    []
  );

  useEffect(() => {
    if (from > 151) return;
    dispatch(getPokeList({ from, to }));
  }, [dispatch, from, to]);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/" component={Pokemons} />
          <Route render={() => "Page not found"} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
