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

const { increment } = counterSlice.actions;

export { increment }
export default counterSlice.reducer;
