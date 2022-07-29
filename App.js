import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import Settings from './screens/Settings';
import { useDispatch } from 'react-redux';
import { setTrendingMovies } from './store/slices/moviesSlice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";

const AppWrapper = () => {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TailwindProvider>
  );
}
const App = () => {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d5826b4e12c757147537031e74238c63')
  //     .then(response => response.json())
  //     .then(data => {
  //       dispatch(setTrendingMovies(data.results))
  //     })
  // }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="My List" component={Settings} />
        <Tab.Screen name="Friends" component={Settings} />
        <Tab.Screen name="Profile" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppWrapper;