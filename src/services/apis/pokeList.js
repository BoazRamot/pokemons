import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokeItem = createAsyncThunk(
  "poke/getPokeItem",
  async ({ id }) => {
    const data = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return data.data;
  }
);
export const getPokeList = createAsyncThunk(
  "poke/getPokeList",
  // async () => await axios.get(`${BASE_URL}/pokemon?limit=151`)
  async ({ from, to }) => {
    const poke = {};
    const upTo151 = to <= 151 ? to : 151;
    for (let index = from; index <= upTo151; index++) {
      const data = await axios.get(`${BASE_URL}/pokemon/${index}`);
      const pokemon = {
        id: data.data.id,
        name: data.data.name,
        gameIndices: data.data.game_indices.map((item) => item.version.name),
        locationAreaEncounters: data.data.location_area_encounters,
        moves: data.data.moves.map((item) => item.move.name),
        types: data.data.types.map((item) => item.type.name),
        species: data.data.species.url,
        sprites: data.data.sprites,
      };
      poke[index] = pokemon;
    }
    return poke;
  }
);
