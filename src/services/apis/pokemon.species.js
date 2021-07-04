import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./pokeList";

function getPokemonSpeciesArray(obj) {
  return new Promise((resolve, reject) => {
    async function _getPokemonSpeciesArray(obj, arrRecursion = []) {
      let arr = [...arrRecursion];
      const id = obj.species.url.split("/")[6];
      const pokemon = await axios.get(`${BASE_URL}/pokemon/${id}`);
      const url = pokemon.data.sprites.other.dream_world.front_default;
      arr[arr.length] = `${obj.species.name}***${url}***${id}`;
      if (obj.evolves_to.length !== 0) {
        _getPokemonSpeciesArray(obj.evolves_to[0], arr);
      } else {
        resolve(arr);
      }
    }
    _getPokemonSpeciesArray(obj);
  });
}

export const getPokemonSpecies = createAsyncThunk(
  "pokemon/getPokemonSpecies",
  async ({ id, url }) => {
    const data = await axios.get(url);
    const evolutionChain = await axios.get(data.data.evolution_chain.url);
    const species = await getPokemonSpeciesArray(evolutionChain.data.chain);
    return { id, species };
  }
);
