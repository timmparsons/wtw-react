import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: '#fff', padding: 15 }}>
        <HeaderTabs />
      </View>
      <View >
        <MovieList />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
