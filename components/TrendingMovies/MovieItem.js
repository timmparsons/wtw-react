import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import { movieImageURL } from '../../constants/index';
import styled from 'styled-components/native';


const Styled = {
  // Text: styled.Text`
  //   color: gray;
  //   max-width: 75%;
  //   justify-content: center;
  //   alignItems: center;
  // `,
  // Image: styled.Image`
  //   padding: 11px;
  //   margin: 20px;
  //   aspectRatio: 2/3;
  // `
  View: styled.View`
    width: 100px;
  `
}

const MovieItem = ({ movie }) => {
  const { poster_path, original_title, original_name } = movie;

  return (
    <Styled.View>
      <TouchableOpacity>
        <Image
          className='h-100 w-50 p-8 m-1'
          source={{
            uri: `${movieImageURL}${poster_path}`
          }}
        />
      </TouchableOpacity>
      <Text>{original_title || original_name}</Text>
    </Styled.View>
  );
}

export default MovieItem;