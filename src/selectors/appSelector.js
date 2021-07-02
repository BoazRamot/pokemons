import { createSelector } from "reselect";

export const getAppState = (state) => state.app;
export const getFavoriteById = (state, id) => state.app.favorites[id];
export const getFavoritesSize = (state) =>
  Object.keys(state.app.favorites).length;
