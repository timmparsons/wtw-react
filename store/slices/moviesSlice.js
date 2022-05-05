import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  movieList: []
}

export const moviesSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      // console.log('qqq', action.payload)
      state.movieList = action.payload;
      // console.log('qqq1', state.movies)
    }
  }
})

export const { setTrendingMovies } = moviesSlice.actions;

//selectors
export const getMovies = state => state.movie;

export default moviesSlice.reducer;