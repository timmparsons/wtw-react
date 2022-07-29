import { setTrendingMovies } from '../store/slices/moviesSlice';
import { takeEvery } from 'redux-saga/effects'
import { endpoints } from '../api/endpoints';
import { initialize } from '../store/actions/initialize';

function* fetchTrendingMovies() {
  console.log('ACTION CALLED')
  fetch(endpoints.trending)
    .then(response => response.json())
    .then(data => {
      dispatch(setTrendingMovies(data.results))
    })
};

function* mainSaga() {
  yield takeEvery(initialize, fetchTrendingMovies);
}

export default mainSaga;