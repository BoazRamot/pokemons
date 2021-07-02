import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAppState } from "../../selectors/appSelector";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "../localStorage/localStorage";

export const saveState = createAsyncThunk("app/saveState", async () => {
  console.log("saveState");
  const state = getAppState();
  saveStateToLocalStorage(state);
  // return;
});

export const loadState = createAsyncThunk("app/loadState", async () => {
  const state = loadStateFromLocalStorage();
  if (state) {
    return state;
  }
});
