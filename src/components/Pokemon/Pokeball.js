import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
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
    height: "10rem",
    width: "10rem",
  },
  cardContent: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

const Pokeball = ({ id, short = false, match }) => {
  const classes = useStyles({ short });

  return (
    <Card className={classes.cardRoot}>
      <CardContent className={classes.cardContent}>
        <img
          className={`App-logo ${classes.cardImg}`}
          src={`${process.env.PUBLIC_URL}/img/pokeball.png`}
          alt="Pokemon"
        />
      </CardContent>
    </Card>
  );
};

export default Pokeball;
