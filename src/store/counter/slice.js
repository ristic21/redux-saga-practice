import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performCounterReset: () => {},
};

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value == 0) {
        return alert("Vrednost ne moze biti manja od nula");
      }
      state.value -= 1;
    },
    increaseBy: (state, action) => {
      if (action.payload < 0) {
        return alert("Ne mozete uvecati sa negativnim brojem");
      }
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    ...middlewareActions,
  },
});

export const { increment, decrement, increaseBy, reset, performCounterReset } =
  counterSlice.actions;

export default counterSlice.reducer;
