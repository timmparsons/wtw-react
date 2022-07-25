import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import HeaderTabs from '../components/HeaderTabs';
import TrendingMovieList from '../components/TrendingMovieList';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: '#fff', padding: 15 }}>
      </View>
      <View >
        <TrendingMovieList />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
