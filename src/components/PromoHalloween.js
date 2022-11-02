import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import DATA from '../constants/DATA'
import Lottie from 'lottie-react-native';

const PromoHalloween = () => {
  return (
    <View className=' pb-5'>
      {/* banner */}
      <Banner />

      <>
      <CardHeader />
      <FlatList
        data={DATA.promo}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index}) => <Card data={item} index={index}/>}
      />
      </>
    </View>
  )
}

const Banner = () => {
  return (
    <View className='border-[#eeeeee] border-[1px] rounded-lg flex-row p-3 space-x-5 mx-4'>
      <View className='flex-1'>
        <Text className='font-PoppinsSemiBold text-black text-lg '>Become a pro</Text>
        <Text className='text-black font-PoppinsRegular text-sm ' numberOfLines={1}>for monthly FREE deliveries at every restaurant you want</Text>
      </View>
      <View className='w-[30%] h-11 overflow-hidden -rotate-6'>
        <Image
          source={require('../assets/images/foodpanda-promo.webp')}
          resizeMode='contain'
          className='w-full h-full '
        />
      </View>
    </View>
  )
}

const CardHeader = () => {
  return (
    <View className='pt-5 pb-4 pl-4'>
      <Lottie 
        source={require('../assets/animations/halloween-hanging-letters.json')} autoPlay loop 
        style={{width: 250, height: 250, zIndex: 100, position: 'absolute', right: -20}}
      />
      <Text className='text-lg text-black font-bold'>Your daily deals</Text>
    </View>
  )
}

const Card = ({ data, index }) => {
  return (
    <View className='items-center mr-3' style={{ paddingLeft: index === 0 ? 16 : 0}}>
      <View className='w-36 h-40 rounded-lg overflow-hidden'>
        <Image
          source={data.image}
          resizeMode='cover'
          className='w-full h-full'
        />
      </View>
    </View>
  )
}

export default PromoHalloween