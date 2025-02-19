import { createSlice } from "@reduxjs/toolkit";
import { getBattleField_1, getBattleField_2 } from "./operations";

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
      .addCase(getBattleField_1.pending, handlePending)
      .addCase(getBattleField_1.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.battleField_1 = action.payload;
      })
      .addCase(getBattleField_1.rejected, handleRejected)

      .addCase(getBattleField_2.pending, handlePending)
      .addCase(getBattleField_2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.battleField_2 = action.payload;
      })
      .addCase(getBattleField_2.rejected, handleRejected);
  },
});

export const warshipsReducer = warshipsSlice.reducer;
