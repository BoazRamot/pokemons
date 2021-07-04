import React, { memo } from "react";
import { Fab } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const AddToFavorits = ({ clickHandler, favorite }) => {
  return (
    <Fab onClick={clickHandler} variant="extended">
      <p>{favorite ? "Remove From Favorites" : "Add To Favorites"}</p>
      <StarIcon color={favorite ? "error" : undefined} />
    </Fab>
  );
};

export default memo(AddToFavorits);
