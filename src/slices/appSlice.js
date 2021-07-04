import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../services/appPersisting/appPersisting";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isStartPlay: true,
    isDarkMode: false,
    favorites: {},
  },
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites[action.payload.id] = action.payload;
    },
    removeFromFavorites: (state, action) => {
      delete state.favorites[action.payload];
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

export const { addToFavorites, removeFromFavorites, hydrate } =
  appSlice.actions;

export default appSlice.reducer;
