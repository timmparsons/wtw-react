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
import { initialize } from './store/actions/initialize';

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

  useEffect(() => {
    dispatch(initialize())
  }, [])

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