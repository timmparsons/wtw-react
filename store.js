import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import movieReducer from './store/slices/moviesSlice';
// import createSagaMiddleware from 'redux-saga'

// import mainSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    movies: movieReducer
  }
}
);

// sagaMiddleware.run(mainSaga)