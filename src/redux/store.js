import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import professionsReducer from './professionsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    professions: professionsReducer,
  },
});