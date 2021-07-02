import { createSelector } from "reselect";

export const getPokemonById = (state, id) => state.pokemon.poke[id];
