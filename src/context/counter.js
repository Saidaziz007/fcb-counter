import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
      if (action.payload == "") {
        state.value += 1;
      }
    },
    decrement: (s, action) => {
      s.value -= action.payload;
      if (s.value <= -1) {
        s.value = 0;
      }
      if (action.payload == "") {
        s.value -= 1;
      }
    },
    reset: (r) => {
      r.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
