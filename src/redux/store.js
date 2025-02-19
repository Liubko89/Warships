import { configureStore } from "@reduxjs/toolkit";
import { warshipsReducer } from "./warships/slice";

export const store = configureStore({
  reducer: { warships: warshipsReducer },
});
