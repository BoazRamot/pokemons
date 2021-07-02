import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "./slices/appSlice";
import { getPokeList } from "./services/apis/pokeList";
import { saveState, loadState } from "./services/appPersisting/appPersisting";
import { createMuiTheme, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
// import PageNotFound from "./PageNotFound";
import Pokemon from "./components/Pokemon/Pokemon";

import Header from "./components/Header/Header";
import Pokemons from "./pages/Pokemons";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexFlow: "column nowrap",
  },
}));

function App() {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const from = useSelector((state) => state.pokemon.from);
  const to = useSelector((state) => state.pokemon.to);
  // const pokeList = useSelector((state) => state.poke.poke);
  const dispatch = useDispatch();

  const darkModeHandler = () => {
    dispatch(changeDarkMode());
  };

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
          // primary: {
          //   main: "#855E42",
          // },
        },
      }),
    [isDarkMode]
  );

  useEffect(() => {
    if (from > 151) return;
    dispatch(getPokeList({ from, to }));
  }, [dispatch, from, to]);

  return (
    <div
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <ThemeProvider theme={theme}>
        <Header darkModeHandler={darkModeHandler} isDarkMode={isDarkMode} />
        {/* {console.log("pokeList", pokeList)} */}
        {/* <Box pt={pageNotFound ? 0 : 7}> */}
        {/* <Box pt={10}> */}
        <Switch>
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/" component={Pokemons} />
          <Route render={() => "Page not found"} />
        </Switch>
        {/* </Box> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
