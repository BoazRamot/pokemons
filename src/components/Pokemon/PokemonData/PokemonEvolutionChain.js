import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepper: {
    backgroundColor: "transparent",
  },
  img: {
    height: "10rem",
    width: "10rem",
  },
}));

function PokemonEvolutionChain({ pokemon }) {
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
      >
        {Array.isArray(pokemon.species) &&
          pokemon.species.map((item, index) => {
            const [name, url] = item.split("***");
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
