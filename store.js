import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import movieReducer from './store/slices/moviesSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  }
});