import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../services/appPersisting/appPersisting";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isDarkMode: false,
    favorites: {},
  },
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    changeDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    addToFavorites: (state, action) => {
      state.favorites[action.payload.id] = action.payload;
    },
    removeFromFavorites: (state, action) => {
      delete state.favorites[action.payload];
    },
    restoreAppData: (state, action) => {
      // state.isDarkMode = action.payload.isDarkMode;
      // state.favorites = action.payload.favorites;
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: {
    [loadState.fulfilled]: (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeDarkMode, addToFavorites, removeFromFavorites, hydrate } =
  appSlice.actions;

export default appSlice.reducer;
