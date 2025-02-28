import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirstField,
  getSecondField,
  resetFild_1,
  resetFild_2,
  updateFild_1,
  updateFild_2,
} from "../../helpers/apiService";

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
  "cell/battleField_1",
  async (body, thunkAPI) => {
    try {
      const response = await updateFild_1(body);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resetField_1 = createAsyncThunk(
  "create/battleField_1",
  async (body, thunkAPI) => {
    try {
      const response = await resetFild_1(body);
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

export const updateBattleField_2 = createAsyncThunk(
  "cell/battleField_2",
  async (body, thunkAPI) => {
    try {
      const response = await updateFild_2(body);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resetField_2 = createAsyncThunk(
  "create/battleField_2",
  async (body, thunkAPI) => {
    try {
      const response = await resetFild_2(body);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
