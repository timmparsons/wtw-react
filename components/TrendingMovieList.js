import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { getMovies, getMovieImages } from '../store/slices/moviesSlice'
import { movieImageURL } from '../constants/index';

const TrendingMovieList = () => {
  const trendingMovieImage = useSelector(getMovieImages);


  const TrendingMovie = () => {
    // const imageUrl = `${movieImageURL}${imagePath}`;
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          padding: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* <Text className='font-bold text-lg'>{title} </Text> */}
        {trendingMovieImage.map(imagePath => <Image
          key={imagePath}
          className='box-border h-20 w-20 p-10 mr-6 border-4'
          source={{
            uri: `${movieImageURL}${imagePath}`
          }} />)}
      </ScrollView>
    );
  }

  const renderMovie = ({ item }) => (
    <TrendingMovie
      title={item.title || item.name}
      description={item.overview}
      imagePath={item.poster_path} />
  );

  return (
    <View>
      {trendingMovieImage && <FlatList
        data={trendingMovieImage}
        renderItem={renderMovie}
        keyExtractor={item => item.id}>
      </FlatList>
      }
    </View>
  )
}

export default TrendingMovieList;

