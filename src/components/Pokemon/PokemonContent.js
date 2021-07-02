import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function HorizontalNonLinearAlternativeLabelStepper({ steps }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  // pokemon.species.map((item) => {
  //   const [name, url] = item.split("***");
  //   return <img src={url} title={name} alt="Pokemon" />;
  // })

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((item, index) => {
          const [name, url] = item.split("***");
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={name} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                <img src={url} title={name} alt="Pokemon" />
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

const PokemonContent = ({ variant, component, color, pokemon, short }) => {
  return short ? null : (
    <div>
      <Typography variant="h5" component="h2">
        gameIndices: {pokemon.gameIndices?.toString()}
      </Typography>
      {/* <Typography variant="h5" component="h2">
        {pokemon.locationAreaEncounters}
      </Typography> */}
      <Typography variant="h5" component="h2">
        moves: {pokemon.moves?.toString()}
      </Typography>
      <Typography variant="h5" component="h2">
        types: {pokemon.types?.toString()}
      </Typography>
      {/* <Typography variant="h5" component="h2">
        species: {pokemon.species?.toString()}
      </Typography> */}
      <Typography variant="h5" component="h2">
        locationAreaEncounters: {pokemon.locationAreaEncounters?.toString()}
      </Typography>
      {Array.isArray(pokemon.species) && (
        <HorizontalNonLinearAlternativeLabelStepper steps={pokemon.species} />
      )}
      {/* {Array.isArray(pokemon.species) &&
        pokemon.species.map((item) => {
          const [name, url] = item.split("***");
          return <img src={url} title={name} alt="Pokemon" />;
        })} */}
    </div>
  );
  // return (
  //   <Typography variant={variant} color={color} component={component}>
  //     {content}
  //   </Typography>
  // );
};

export default PokemonContent;
