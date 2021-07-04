import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { Typography, makeStyles, Fab, CardHeader } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    width: "100%",
  },
  cardHeaderTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  typography: {
    color: "white",
  },
}));

const PokemonName = ({ id, short = false, name }) => {
  const history = useHistory();
  const classes = useStyles();

  const arrowPrevHandler = () => {
    const prevId = id === 1 ? 151 : id - 1;
    history.push(`/pokemon/${prevId}`);
  };

  const arrowNextHandler = () => {
    const prevId = id === 151 ? 1 : id + 1;
    history.push(`/pokemon/${prevId}`);
  };

  return (
    <CardHeader
      className={classes.cardHeader}
      title={
        <div className={classes.cardHeaderTitle}>
          {!short && (
            <Fab variant="extended" onClick={arrowPrevHandler}>
              <ArrowBackIosIcon fontSize="large" />
              <p>Prev</p>
            </Fab>
          )}
          <Typography className={classes.typography} variant="h5">
            {name.toUpperCase()}
          </Typography>
          {!short && (
            <Fab variant="extended" onClick={arrowNextHandler}>
              <p>Next</p>
              <ArrowForwardIosIcon fontSize="large" />
            </Fab>
          )}
        </div>
      }
    />
  );
};

export default memo(PokemonName);
