import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      // console.log('qqq', action.payload)
      state.movies = action.payload.results;
    }
  }
})

export const { setTrendingMovies } = moviesSlice.actions;

//selectors
export const getMovies = (state) => state.movies;

export default moviesSlice.reducer;