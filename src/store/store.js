import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../slices/appSlice";
import pokemonReducer from "../slices/pokemonSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    pokemon: pokemonReducer,
  },
});
