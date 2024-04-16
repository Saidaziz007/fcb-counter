import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";

export const store = configureStore({
  reducer: {
    counter,
  },
});

export const RESET_VALUE = "RESET_VALUE";

export const resetValue = () => ({
  type: RESET_VALUE,
});
