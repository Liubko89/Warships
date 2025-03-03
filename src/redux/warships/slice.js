import { createSlice } from "@reduxjs/toolkit";
import {
  getBattleField_1,
  getBattleField_2,
  resetField_1,
  resetField_2,
  updateBattleField_1,
  updateBattleField_2,
} from "./operations";

const initialState = {
  battleField_1: [],
  battleField_2: [],
  isLoading: false,
  error: null,
  player: "",
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const warshipsSlice = createSlice({
  name: "warships",
  initialState,
  reducers: {
    // fill battle field 1
    fillBattleField_1: (state, { payload }) => {
      state.battleField_1 = payload;
    },

    // fill battle field 2
    fillBattleField_2: (state, { payload }) => {
      state.battleField_2 = payload;
    },

    // choose player
    choosePlayer: (state, { payload }) => {
      state.player = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // get battlefield 1
      .addCase(getBattleField_1.pending, handlePending)
      .addCase(getBattleField_1.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.battleField_1 = action.payload;
      })
      .addCase(getBattleField_1.rejected, handleRejected)

      // update battlefield 1
      .addCase(updateBattleField_1.fulfilled, (state, { payload }) => {
        state.error = null;
        state.battleField_1 = payload;
      })
      .addCase(updateBattleField_1.rejected, handleRejected)

      // reset battlefield 1
      .addCase(resetField_1.pending, handlePending)
      .addCase(resetField_1.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        state.battleField_1 = payload;
      })
      .addCase(resetField_1.rejected, handleRejected)

      // get battlefield 2
      .addCase(getBattleField_2.pending, handlePending)
      .addCase(getBattleField_2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.battleField_2 = action.payload;
      })
      .addCase(getBattleField_2.rejected, handleRejected)

      // update battlefield 2
      .addCase(updateBattleField_2.fulfilled, (state, { payload }) => {
        state.error = null;
        state.battleField_2 = payload;
      })
      .addCase(updateBattleField_2.rejected, handleRejected)

      // reset battlefield 2
      .addCase(resetField_2.pending, handlePending)
      .addCase(resetField_2.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        state.battleField_2 = payload;
      })
      .addCase(resetField_2.rejected, handleRejected);
  },
});

export const { fillBattleField_1, fillBattleField_2, choosePlayer } =
  warshipsSlice.actions;

export const warshipsReducer = warshipsSlice.reducer;
