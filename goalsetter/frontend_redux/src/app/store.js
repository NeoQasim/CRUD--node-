import { configureStore } from '@reduxjs/toolkit';
// import {authreducer} from "../features/auth/authSlice.js"
import authReducer from '../features/auth/authslice';
import goalReducer from '../features/goals/goalslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer
  },
});
