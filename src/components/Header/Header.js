import React from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  createStyles,
  makeStyles,
  Toolbar,
  Typography,
  Link,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Player from "../Player/Player";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      marginRight: "1rem",
      color: "white",
    },
  })
);

const Header = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.between(0, "xs"));
  const isStartPlay = useSelector((state) => state.app.isStartPlay);
  const classes = useStyles();

  return (
    <div>
      <AppBar color="inherit">
        <Toolbar>
          <Link component={RouterLink} to={`/pokemons`}>
            <Typography variant="h6" className={classes.title}>
              Pokemons
            </Typography>
          </Link>
          <Link component={RouterLink} to={`/favorites`}>
            <Typography variant="h6" className={classes.title}>
              Favorites
            </Typography>
          </Link>
          <div className={classes.title}></div>
          {!matchesXs && (
            <Player
              text={"The Pokemons Theme"}
              url={`${process.env.PUBLIC_URL}/audio/pokemon.mp3`}
              isStartPlay={isStartPlay}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
