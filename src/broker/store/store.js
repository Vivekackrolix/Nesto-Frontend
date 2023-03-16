import { configureStore } from '@reduxjs/toolkit';
import communityReducer from '../dashboard-containers/broker-profile/community/CommunitySlice';

const store = configureStore({
  reducer: {
    community: communityReducer,
    // add reducers for other features as needed
  },
});

export default store;
