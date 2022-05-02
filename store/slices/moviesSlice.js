import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: ''
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      state.name = action.payload;
    }
  }
})

export const { getMovies } = moviesSlice.actions;

export const selectMovie = (state) => state.movies.name;

export default moviesSlice.reducer;