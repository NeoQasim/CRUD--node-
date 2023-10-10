import { configureStore } from '@reduxjs/toolkit';
// import {authreducer} from "../features/auth/authSlice.js"
import authReducer from '../features/auth/authslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
