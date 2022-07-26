import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { movieImageURL } from '../../constants/index';

const MovieItem = ({ movie: { poster_path } }) => {
  return (
    <TouchableOpacity>
      <Image
        className='h-50 w-50 p-8 m-1'
        source={{
          uri: `${movieImageURL}${poster_path}`
        }}
      />
    </TouchableOpacity>
  );
}

export default MovieItem;