import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import { movieImageURL } from '../../constants/index';
import styled from 'styled-components/native';


const Styled = {
  Text: styled.Text`
    color: gray;
    max-width: 75%;
    justify-content: center;
    alignItems: center;
    aspectRatio: 3/2;
  `,
  Image: styled.Image`
    padding: 11px;
    margin: 20px;
    aspectRatio: 2/3;
  `
}

const MovieItem = ({ movie }) => {
  const { poster_path, original_title, original_name } = movie;

  return (
    <View className='max-w-lg'>
      <TouchableOpacity>
        <Styled.Image
          source={{
            uri: `${movieImageURL}${poster_path}`
          }}
        />
      </TouchableOpacity>
      <Styled.Text>{original_title || original_name}</Styled.Text>
    </View>
  );
}

export default MovieItem;