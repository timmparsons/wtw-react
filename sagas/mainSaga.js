import { setTrendingMovies } from '../store/slices/moviesSlice';
import { takeEvery, put, call } from 'redux-saga/effects'
import { endpoints } from '../api/endpoints';
import { initialize } from '../store/actions/initialize';

function* fetchTrendingMovies() {
  const response = yield call(callApiSaga, endpoints.trending)
  yield put(setTrendingMovies(response.results))
};

function* callApiSaga(endpoint) {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log('qqq1', data)
      return data
    })
}

function* mainSaga() {
  yield takeEvery(initialize, fetchTrendingMovies);
}

export default mainSaga;