import React from 'react'
import { Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { getTrendingMovies } from '../../redux/slices/moviesSlice';
import MovieItem from './MovieItem';

const TrendingMovieList = ({ title }) => {
  const trendingMovieImage = useSelector(getTrendingMovies);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        padding: 30,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* <Text>{title}</Text> */}
      {trendingMovieImage.map(movie => (
        <MovieItem movie={movie} />
      ))}
    </ScrollView>
  )
}

export default TrendingMovieList;

