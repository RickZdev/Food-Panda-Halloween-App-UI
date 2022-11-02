import { View, Text, FlatList, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import DATA from '../constants/DATA'

const CuisinesDark = () => {
  return (
    <>
    <CardHeader />
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        data={DATA.cuisines}
        keyExtractor={item => item.id}
        numColumns={5}
        renderItem={({ item, index}) => <Card data={item} index={index}/>}
      />
    </ScrollView>
    </>
  )
}

const Card = ({ data, index }) => {
  return (
    <View className='mb-6 items-center mr-2' 
      style={{ paddingLeft: index === 0 || index === 5 ? 16 : 0, paddingRight: index === 4 || index === 9 ? 8 : 0}}
    >
      <Pressable android_ripple={{ color: '#dfdfdf'}} className='w-20 h-20 mb-2 bg-[#f7f7f7] justify-center items-center pt-3 rounded-lg overflow-hidden'>
        <Image
          source={data.image}
          resizeMode='contain'
          className='w-full h-full left-4 '
        />
      </Pressable>
      <View className='justify-center items-center w-20'>
        <Text className='font-PoppinsSemiBold text-white text-xs text-center'>{data.name}</Text>
      </View>
    </View>
  )
}

const CardHeader = () => {
  return (
    <View className='pt-5 pb-4 pl-6'>
      <Text className='text-lg text-white font-bold'>Cuisines</Text>
    </View>
  )
}

export default CuisinesDark