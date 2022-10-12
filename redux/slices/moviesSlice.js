import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  movieList: []
}

export const moviesSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      state.movieList = action.payload;
    }
  }
})

export const { setTrendingMovies } = moviesSlice.actions;

//selectors
export const getTrendingMovies = state => state.movies.movieList;
export const getMovieImages = createSelector(getTrendingMovies, movies => (
  movies.map(movie => movie.poster_path)
))

export default moviesSlice.reducer;