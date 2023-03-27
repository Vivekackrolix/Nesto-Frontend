import { createSlice } from "@reduxjs/toolkit";

const initialState = { properties: [] };

const recentlyAddedPropertySlice = createSlice({
  name: "Recently Added Property",
  initialState,
  reducers: {
    setAddedPropertyDetails(state, action) {
      // debugger;
      state.properties = action.payload.data;
    },
  },
});

export const recentlyAddedPropertyActions = recentlyAddedPropertySlice.actions;
export default recentlyAddedPropertySlice.reducer;
