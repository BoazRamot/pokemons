import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemonLocations = createAsyncThunk(
  "pokemon/getPokemonLocations",
  async ({ id, url }) => {
    const data = await axios.get(url);
    const locationAreaEncounters = data.data.map(
      (area) => area.location_area.name
    );
    return { id, locationAreaEncounters };
  }
);
