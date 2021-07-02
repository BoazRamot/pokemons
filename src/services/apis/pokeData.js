import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./pokeList";

export const getPokeData = createAsyncThunk(
  "poke/getPokeData",
  async (id) => await axios.get(`${BASE_URL}/pokemon/${id}`)
);
