import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './screens/Home';
import { useDispatch } from 'react-redux';
import { setTrendingMovies } from './store/slices/moviesSlice';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d5826b4e12c757147537031e74238c63')
      .then(response => response.json())
      .then(data => {
        dispatch(setTrendingMovies(data))
      })
  }, [])

  return (
    <Home />
  )
}

export default AppWrapper;