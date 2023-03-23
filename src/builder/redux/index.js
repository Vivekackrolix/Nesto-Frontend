import { configureStore } from "@reduxjs/toolkit";
import builderDetailReducer from "./builderDetailSlice";
import recentlySoldPropertyReducer from "./recentlySoldPropertySlice";
const store = configureStore({
  reducer: {
    builderDetail: builderDetailReducer,
    soldPropertyDetail: recentlySoldPropertyReducer,
  },
});

export default store;
