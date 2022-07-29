import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import movieReducer from './store/slices/moviesSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import { initialize } from './store/actions/initialize';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    movies: movieReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
  }
});

sagaMiddleware.run(rootSaga)
store.dispatch(initialize)