import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import OpenWithIcon from "@material-ui/icons/OpenWith";
import LeakRemoveIcon from "@material-ui/icons/LeakRemove";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AlbumIcon from "@material-ui/icons/Album";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import PokemonMove from "./PokemonMove";
import { randomNumber } from "../../../common/common";

const useStyles = makeStyles((theme) => ({
  movesRoot: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center ",
  },
}));

const icons = [
  <TrackChangesIcon />,
  <ControlCameraIcon />,
  <OpenWithIcon />,
  <LeakRemoveIcon />,
  <AcUnitIcon />,
  <AlbumIcon />,
  <EmojiNatureIcon />,
];

const RandomIcon = () => {
  return icons[randomNumber(0, 6)];
};

const PokemonMoves = ({ moves }) => {
  const classes = useStyles();

  return (
    <div className={classes.movesRoot}>
      {moves.map((move) => (
        <PokemonMove key={move} move={move} icon={RandomIcon} />
      ))}
    </div>
  );
};

export default memo(PokemonMoves);
