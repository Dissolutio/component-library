import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: 0 as number,
  name: "counter",
  reducers: {
    increment(state, action: PayloadAction<number>) {
      return state + action.payload;
    }
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
