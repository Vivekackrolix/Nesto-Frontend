import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    builderID: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setBrokerID: (state, action) => {
      state.builderID = action.payload;
    },
  },
});

export const { setToken, setBuilderID } = authSlice.actions;

export default authSlice.reducer;
