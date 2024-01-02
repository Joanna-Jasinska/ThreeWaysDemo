import { createSlice } from "@reduxjs/toolkit";
import {
  // clearCombat,
  combatTick,
  // beginCombat,
  // rollAllDices,
  // endTurn,
  // updateDice,
  // addDice,
  // addRolledDice,
  // addMultipleRolledDice,
  // copyAllEnemyDicesToBag,
  // deleteRolledDice,
  // selectDice,
  // toggleDiceSelection,
  // deselectAllDices,
  // enterSummary,
  // willEndCombat,
  // deleteAllSelectedDices,
} from "./operations";
import { walk } from "../../data/actions/walk";

const initialState = {
  timeline: [{ hero: 1, css: walk, ticks: 0 }],
  ticks: 0,
  pause: false,
  isLoading: false,
  endCombat: false,
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  // state.error = action.payload;
};
const handlePending = (state) => {
  state.isLoading = true;
};

const combatSlice = createSlice({
  name: "combat",
  initialState,
  extraReducers: {
    [combatTick.pending]: handlePending,
    [combatTick.rejected]: handleRejected,
    [combatTick.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.timeline = action.payload;
      state.ticks = state.ticks + 1;
    },

    // [clearCombat.pending]: handlePending,
    // [clearCombat.rejected]: handleRejected,
    // [clearCombat.fulfilled](state, action) {
    //   state.inCombat = false;
    //   state.isLoading = false;
    //   state.error = null;
    //   state.dices = initialState.dices;
    //   state.rolledDices = initialState.rolledDices;
    //   state.endTurn = false;
    //   state.endCombat = false;
    // },

    // [willEndCombat.pending]: handlePending,
    // [willEndCombat.rejected]: handleRejected,
    // [willEndCombat.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.endCombat = action.payload;
    // },

    // [beginCombat.pending]: handlePending,
    // [beginCombat.rejected]: handleRejected,
    // [beginCombat.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.dices = action.payload.dices;
    //   // state.dices = [{ item: "dice" }, {}, {}, {}];
    //   state.rolledDices = action.payload.rolledDices;
    //   // state.rolledDices = [{ item: "dice" }, { item: "dice" }, {}, {}, {}, {}];
    //   // state.enemy = action.payload.enemy;
    //   state.endTurn = false;
    //   state.inCombat = true;
    // },

    // [updateDice.pending]: handlePending,
    // [updateDice.rejected]: handleRejected,
    // [updateDice.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.rolledDices[action.payload.index] = {
    //     ...state.rolledDices[action.payload.index],
    //     ...action.payload,
    //   };
    // },

    // [deleteRolledDice.pending]: handlePending,
    // [deleteRolledDice.rejected]: handleRejected,
    // [deleteRolledDice.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.rolledDices = state.rolledDices.filter((dice) => {
    //     return !(dice.id === action.payload.id);
    //   });
    // },

    // [deleteContactById.pending]: deleteContactByIdPending,
    // [deleteContactById.rejected]: handleRejected,
    // [deleteContactById.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts = state.contacts.filter(
    //     item => item.id !== action.payload.id
    //   );
    // },
    // [addContact.pending]: handlePending,
    // [addContact.rejected]: handleRejected,
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = [...state.equipment, action.payload];
    // },
  },
});
export const combatReducer = combatSlice.reducer;
