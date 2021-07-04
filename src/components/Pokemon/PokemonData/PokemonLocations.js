import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";
import PokemonLocation from "./PokemonLocation";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import ExploreIcon from "@material-ui/icons/Explore";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import PinDropIcon from "@material-ui/icons/PinDrop";
import PetsIcon from "@material-ui/icons/Pets";
import PolicyIcon from "@material-ui/icons/Policy";
import { randomNumber } from "../../../common/common";

const useStyles = makeStyles((theme) => ({
  movesRoot: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center ",
  },
}));

const locationIcons = [
  <LocationCityIcon />,
  <LocationOnIcon />,
  <LocationSearchingIcon />,
  <ExploreIcon />,
  <GpsFixedIcon />,
  <PinDropIcon />,
  <PetsIcon />,
  <PolicyIcon />,
];

const RandomLocationIcon = () => {
  return locationIcons[randomNumber(0, 7)];
};

const PokemonLocations = ({ locationAreaEncounters }) => {
  const classes = useStyles();

  return (
    <div className={classes.movesRoot}>
      {locationAreaEncounters.map((location) => (
        <PokemonLocation
          key={location}
          location={location}
          icon={RandomLocationIcon}
        />
      ))}
    </div>
  );
};

export default memo(PokemonLocations);
