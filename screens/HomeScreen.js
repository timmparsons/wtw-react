import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import TrendingMovieList from '../components/TrendingMovies/TrendingMovieList';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, SearchIcon } from 'react-native-heroicons/outline';
import TopMovies from '../components/TopMovies';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>

      {/* Header */}
      <View className='flex-row items-center pb-3 mx-4 space-x-2'>
        <Image source={{
          uri: 'https://links.papareact.com/wru'
        }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Up Next</Text>
        </View>
        <UserIcon size={20} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='pb-2 mx-4'>
        <View className='flex-row space-x-2 bg-gray-200 p-3'>
          <SearchIcon color='gray' size={20} />
          <TextInput
            placeholder='Find a movie...'
            keyboardType='default'
          />
        </View>
      </View>

      {/* Body */}
      <ScrollView className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100
        }}>

        {/* Trending */}
        <TrendingMovieList title='Trending' />

        {/* Top Movies */}
        <TopMovies />

        {/* Your Movies */}


      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})
