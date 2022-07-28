import { all, spawn } from 'redux-saga/effects'
import mainSaga from '../sagas/mainSaga';

export default function* rootSaga() {
  yield all([
    spawn(mainSaga)
  ])
}