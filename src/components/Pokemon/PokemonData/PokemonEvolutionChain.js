import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Stepper, Step, StepButton, makeStyles } from "@material-ui/core";
import PokemonActions from "../PokemonActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepper: {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: "10rem",
    width: "10rem",
  },
}));

function PokemonEvolutionChain({ pokemon, matches }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const isCurrent = (name) => {
    return pokemon.name === name;
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        className={classes.stepper}
        orientation={matches ? "vertical" : "horizontal"}
      >
        {Array.isArray(pokemon.species) &&
          pokemon.species.map((item, index) => {
            const [name, url, id] = item.split("***");
            const stepProps = {};
            const buttonProps = {};
            if (isCurrent(name)) {
              buttonProps.optional = (
                <Typography variant="subtitle1">Current</Typography>
              );
            }
            return (
              <Step key={name} {...stepProps} color="inherit">
                <StepButton onClick={handleStep(index)} {...buttonProps}>
                  <img
                    className={classes.img}
                    src={url}
                    title={name}
                    alt="Pokemon"
                  />
                  <PokemonActions
                    isfavorite={false}
                    id={Number(id)}
                    short={true}
                  />
                </StepButton>
              </Step>
            );
          })}
      </Stepper>
    </div>
  );
}

// const PokemonContent = ({ pokemon, short }) => {
//   return short ? null : (
//     <div>
//       {Array.isArray(pokemon.species) && (
//         <HorizontalNonLinearAlternativeLabelStepper
//           steps={pokemon.species}
//           pokemonName={pokemon.name}
//         />
//       )}
//     </div>
//   );
// };

export default PokemonEvolutionChain;
