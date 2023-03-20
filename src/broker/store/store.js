import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import communityReducer from '../dashboard-containers/broker-profile/community/CommunitySlice';
import loginReducer from '../features/auth/login/loginSlice';

const store = configureStore({
  reducer: {
    community: communityReducer,
    // bsModal: ,
    // add reducers for other features as needed
    // login:
    login: loginReducer,
  },
});

export default store;
