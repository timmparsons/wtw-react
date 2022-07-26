import React from 'react'
import { Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { getTrendingMovies } from '../../store/slices/moviesSlice';
import MovieItem from './MovieItem';

const TrendingMovieList = ({ title }) => {
  const trendingMovieImage = useSelector(getTrendingMovies);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        padding: 10,
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

