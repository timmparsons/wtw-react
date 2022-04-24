import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'batman'
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovie: (state, action) => {
      state.name = action.payload;
    }
  }
})

export const { getMovie } = movieSlice.actions;

export const selectMovie = (state) => state.movies.name;

export default movieSlice.reducer;