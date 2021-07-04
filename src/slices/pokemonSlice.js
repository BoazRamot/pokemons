import { createSlice } from "@reduxjs/toolkit";
import { getPokeList, getPokeItem } from "../services/apis/pokeList";
import { getPokemonLocations } from "../services/apis/pokemon.locations";
import { getPokemonSpecies } from "../services/apis/pokemon.species";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    poke: {},
    loading: false,
    error: null,
    from: 1,
    to: 6,
  },
  extraReducers: {
    [getPokeItem.fulfilled]: (state, action) => {
      state.poke[action.payload.id] = action.payload;
    },
    [getPokeList.fulfilled]: (state, action) => {
      state.poke = { ...state.poke, ...action.payload };
      state.from += 6;
      state.to += 6;
    },
    [getPokemonLocations.fulfilled]: (state, action) => {
      state.poke[action.payload.id]["locationAreaEncounters"] =
        action.payload.locationAreaEncounters;
    },
    [getPokemonSpecies.fulfilled]: (state, action) => {
      state.poke[action.payload.id]["species"] = action.payload.species;
    },
  },
});

export default pokemonSlice.reducer;
