import { configureStore } from "@reduxjs/toolkit";
import builderDetailReducer from "./builderDetailSlice";
const store = configureStore({
  reducer: {
    builderDetail: builderDetailReducer,
  },
});

export default store;
