import { setTrendingMovies } from '../redux/slices/moviesSlice';
import { takeEvery, put, call } from 'redux-saga/effects'
import { fetchTrending } from '../api/endpoints';
import { initialize } from '../redux/actions/initialize';
import endpoints from '../api/endpoints';

function* fetchTrendingMoviesSaga() {
  const response = yield call(callApiSaga, endpoints.fetchTending)
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
  yield takeEvery(initialize, fetchTrendingMoviesSaga);
}

export default mainSaga;