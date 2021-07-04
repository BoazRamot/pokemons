export const getAppState = (state) => state.app;
export const getAllFavoritesIdArray = (state) =>
  Object.keys(state.app.favorites);
export const getFavoriteById = (state, id) => state.app.favorites[id];
export const getFavoritesSize = (state) =>
  Object.keys(state.app.favorites).length;
