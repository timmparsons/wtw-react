import { setTrendingMovies } from '../store/slices/moviesSlice';
import { takeEvery } from 'redux-saga/effects'

function* fetchTrendingMovies() {
  console.log('ACTION CALLED')
  // fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d5826b4e12c757147537031e74238c63')
  //   .then(response => response.json())
  //   .then(data => {
  //     dispatch(setTrendingMovies(data.results))
  //   })
};

function* mainSaga() {
  yield takeEvery('moviesSlice/getTrendingMovies', fetchTrendingMovies);
}

export default mainSaga;