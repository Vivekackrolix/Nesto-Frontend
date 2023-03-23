import { configureStore } from "@reduxjs/toolkit";
import builderDetailReducer from "./builderDetailSlice";
import recentlySoldPropertyReducer from "./recentlySoldPropertySlice";
import recentlyAddedPropertyReducer from "./recentlyAddedPropertySlice";
const store = configureStore({
  reducer: {
    builderDetail: builderDetailReducer,
    soldPropertyDetail: recentlySoldPropertyReducer,
    addedPropertyDetails: recentlyAddedPropertyReducer,
  },
});

export default store;
