import { createSlice } from "@reduxjs/toolkit";
import { combatTick } from "./operations";
import { walk } from "../../data/actions/walk";

const name = "combat";
const initialState = {
  timeline: [{ hero: 1, css: walk, ticks: 0 }],
  ticks: 0,
  pause: false,
  isLoading: false,
  endCombat: false,
};
const handleRejected = (state, action) => {
  state.isLoading = false;
};
const handlePending = (state) => {
  state.isLoading = true;
};

const createExtraActions = () => {
  return {
    combatTick: combatTick(),
  };
};
const extraActions = createExtraActions();

const createExtraReducers = () => {
  return (builder) => {
    console.log(`0 combatSlice-createExtraReducers-combatTick`);
    const combatTick = () => {
      console.log(`1 combatSlice-createExtraReducers-combatTick`);
      // const { pending, fulfilled, rejected } = extraActions.combatTick;
      console.log(`2 combatSlice-createExtraReducers-combatTick`);
      builder.addCase(combatTick.pending, handlePending);
      // .addCase(pending, handlePending)
      // .addCase(fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.timeline = action.payload;
      //   state.ticks = state.ticks + 1;
      // })
      // .addCase(rejected, handleRejected);
      console.log(`3 combatSlice-createExtraReducers-combatTick`);
    };
    console.log(`4 combatSlice-createExtraReducers-combatTick`);
    combatTick();
    console.log(`5 combatSlice-createExtraReducers-combatTick`);
  };
};

const extraReducers = createExtraReducers();
const combatSlice = createSlice({
  name,
  initialState,
  extraReducers,
});

// export const combatActions = { ...slice.actions, ...extraActions };
export const combatReducer = combatSlice.reducer;
