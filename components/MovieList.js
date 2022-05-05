import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import { getMovies } from '../store/slices/moviesSlice'
import { selectMovies } from '../selectors/index';

const MovieList = () => {
  const movies = useSelector(getMovies);

  const Item = ({ title, description }) => (
    <View>
      <Text style={styles.title}>{title} </Text>
      <Text>{description} </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.overview} />
  );
  console.log('zzz', useSelector(getMovies))
  return (
    <View style={styles.container}>
      {movies && <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}>
      </FlatList>
      }
    </View>
  )
}

export default MovieList

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
