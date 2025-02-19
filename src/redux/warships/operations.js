import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirstField, getSecondField } from "../../helpers/apiService";

export const getBattleField_1 = createAsyncThunk(
  "warships/battleField_1",
  async (_, thunkAPI) => {
    try {
      const response = await getFirstField();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateBattleField_1 = createAsyncThunk(
  "warships/battleField_1",
  async (id, thunkAPI) => {
    try {
      const response = await getFirstField();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getBattleField_2 = createAsyncThunk(
  "warships/battleField_2",
  async (_, thunkAPI) => {
    try {
      const response = await getSecondField();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
