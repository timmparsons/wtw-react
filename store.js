import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  }
});