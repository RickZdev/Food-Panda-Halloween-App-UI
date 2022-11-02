import { View, Text, Dimensions, Pressable, Image, useColorScheme } from 'react-native'
import COLORS from '../constants/COLORS'
import Lottie from 'lottie-react-native';

const CategoriesHalloween = () => {
  const colorScheme = useColorScheme();
  const { width, height } = Dimensions.get('window');
  return (
    <View className='flex-row justify-center space-x-2 py-4 bg-[#edf1f4]' style={{ height: height / 2 - 30}} >
      <Lottie 
        source={require('../assets/animations/halloween1.json')} autoPlay loop 
        style={{width: 200, height: 200, position: 'absolute', zIndex: 100, left: -10}}
      />

      {/* column 1 */}
      <View className='space-y-2' style={{ width: width / 2 - 20}}>
        {/* row 1 */}
        <Pressable android_ripple={{ color: '#dfdfdf'}} className='flex-1 bg-white rounded-lg p-4 px-4 py-2 space-y-7 border-[#eeeeee] border-[1px]' >
          <View className=''>
            <Text className='text-2xl font-PoppinsSemiBold text-black'>Food delivery</Text>
            <Text className='text-xs font-PoppinsRegular text-black'>Order food you love</Text>
          </View>
          <View className='flex-1'>
            <Image
              source={require('../assets/images/foodpanda-1.webp')}
              resizeMode='contain'
              className='w-full h-full'
            />
            <Lottie 
              source={require('../assets/animations/halloween-vampire.json')} autoPlay loop 
              style={{width: 100, height: 100, position: 'absolute', zIndex: 100, right: -8, top: 10}}
            />
          </View>
        </Pressable>

        {/* row 2 */}
        <Pressable android_ripple={{ color: '#dfdfdf'}}  className='flex-row bg-white border-[#eeeeee] border-[1px] rounded-lg justify-center items-center pl-4 py-2 space-x-2' style={{ height: '25%'}}> 

          <View className='flex-1'>
            <Text className='text-sm font-PoppinsSemiBold text-black'>pandago</Text>
            <Text className='text-xs font-PoppinsRegular text-black'>{'<'}1hr padala</Text>
          </View>
          <View className='w-16'>
            <Image
              source={require('../assets/images/foodpanda-4.webp')}
              resizeMode='contain'
              className='w-full h-full'
            />
          </View>
        </Pressable>
      </View>

      {/* column 2 */}
      <View className='justify-center space-y-2' style={{ width: width / 2 - 20}}>

        <Pressable android_ripple={{ color: '#dfdfdf'}} className='flex-1 bg-white rounded-lg border-[#eeeeee] border-[1px] '>
          <Lottie 
            source={require('../assets/animations/halloween-ghost.json')} autoPlay loop 
            style={{width: 190, height: 150, position: 'absolute', zIndex: 100}}
          />
          <View className='py-2 pl-4 pr-2'>
            <Text className='text-lg font-PoppinsSemiBold text-black '>Shops</Text>
            <Text className='text-xs font-PoppinsRegular text-black '>Groceries and more</Text>
          </View>
          <View className='flex-1 w-[70%] h-12 self-end py-1'>
            <Image
                source={require('../assets/images/foodpanda-6.png')}
                resizeMode='contain'
                className='w-full h-full'
            />
          </View>
        </Pressable>
        <Pressable android_ripple={{ color: '#dfdfdf'}} className='flex-row items-center bg-white border-[#eeeeee] border-[1px] rounded-lg pl-4 space-x-3 ' style={{ height: '25%'}}>
          <View className='w-[50%]'>
            <Text className='text-base font-PoppinsSemiBold text-black '>Pick-up</Text>
            <Text className='text-xs font-PoppinsRegular text-black '>Get unli savings</Text>
          </View>
          <View className='flex-1 w-16'>
            <Image
              source={require('../assets/images/foodpanda-3.webp')}
              resizeMode='contain'
              className='w-full h-full'
            />
          </View>
        </Pressable>

        <Pressable android_ripple={{ color: '#dfdfdf'}} className='flex-row items-center border-[#eeeeee] border-[1px] bg-white rounded-lg pl-4 space-x-3 ' style={{ height: '25%'}}>
          <View className='w-[50%]'>
            <Text className='text-base font-PoppinsSemiBold text-black '>Dine-in</Text>
            <Text className='text-xs font-PoppinsRegular text-black '>Eat out and save 25%</Text>
          </View>
          <View className='flex-1 w-16'>
            <Image
              source={require('../assets/images/foodpanda-2.png')}
              resizeMode='contain'
              className='w-full h-full'
            />
          </View>
        </Pressable>
      </View>
      <Lottie 
        source={require('../assets/animations/halloween-ball.json')} autoPlay loop 
        style={{width: 150, height: 150, position: 'absolute', zIndex: 100, bottom: -10, right: 0}}
      />
    </View>
  )
}

export default CategoriesHalloween