import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

const MovieList = () => {
  const [ movies, setMovies ] = useState([]);
  const { name } = useSelector((state) => state.movie);
  console.log('zzz', name)
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d5826b4e12c757147537031e74238c63')
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  const Item = ({ title, description }) => (
    <View>
      <Text style={styles.title}>{title} </Text>
      <Text>{description} </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.overview} />
  );

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
