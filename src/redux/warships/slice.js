import { createSlice } from "@reduxjs/toolkit";
import {
  getBattleField_1,
  getBattleField_2,
  resetField_1,
  resetField_2,
  updateCellInBattleField_1,
  updateCellInBattleField_2,
} from "./operations";

const initialState = {
  battleField_1: [],
  battleField_2: [],
  isLoading: false,
  error: null,
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

      // update a cell in battlefield 1
      .addCase(updateCellInBattleField_1.fulfilled, (state, { payload }) => {
        state.error = null;
        state.battleField_1 = payload;
      })
      .addCase(updateCellInBattleField_1.rejected, handleRejected)

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

      // update a cell in battlefield 2
      .addCase(updateCellInBattleField_2.fulfilled, (state, { payload }) => {
        state.error = null;
        state.battleField_2 = payload;
      })
      .addCase(updateCellInBattleField_2.rejected, handleRejected)

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

export const warshipsReducer = warshipsSlice.reducer;
