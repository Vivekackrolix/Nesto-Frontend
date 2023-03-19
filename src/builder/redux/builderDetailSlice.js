import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const builderDetailSlice = createSlice({
  name: "BuilderDetail",
  initialState,
  reducers: {
    add(state, action) {},
  },
});

export const builderDetailActions = builderDetailSlice.actions;
export default builderDetailSlice.reducer;
