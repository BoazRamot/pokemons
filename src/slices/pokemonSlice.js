import { createSlice } from "@reduxjs/toolkit";
import { getPokeList, getPokeItem } from "../services/apis/pokeList";
// import { getPokeData } from "../services/apis/pokeData";
import { getPokemonLocations } from "../services/apis/pokemon.locations";
import { getPokemonSpecies } from "../services/apis/pokemon.species";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    poke: {},
    // poke: new Map(),
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
    // [getPokeList.fulfilled]: async (state, action) => {
    //   const arr = action.payload.data.results;
    //   for (let index = 0; index < arr.length; index++) {
    //     const data = await getPokeData(index + 1);
    //     // state.poke.set(index + 1, arr[index]);
    //     state.poke[index + 1] = arr[index];
    //   }
    // },
    // [getPokeData.fulfilled]: (state, action) => {
    //   const arr = action.payload.data.results;
    //   for (let index = 0; index < arr.length; index++) {
    //     // state.poke.set(index + 1, arr[index]);
    //     state.poke[index + 1] = arr[index];
    //   }
    // },
  },
});

export default pokemonSlice.reducer;
