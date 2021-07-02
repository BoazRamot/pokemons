export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("pokemonAppReducer");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("pokemonAppReducer", serializedState);
  } catch (e) {
    console.error("Pokemon app reducer save state failed", e);
  }
};
