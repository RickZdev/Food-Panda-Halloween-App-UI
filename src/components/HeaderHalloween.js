import { View, Text, TextInput, TouchableOpacity, useColorScheme } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import COLORS from '../constants/COLORS'
import Lottie from 'lottie-react-native';

const HeaderHalloween = () => {
  const colorScheme = useColorScheme();
  const iconSize = 20;
  return (
    <View className='bg-black px-6 py-4 space-y-2' style={{ elevation: 8}}>
    {/* current location */}
    <View className='flex-row space-x-5 items-center'>
    <TouchableOpacity>
      <Feather name='menu' size={iconSize} color={COLORS.white} />
    </TouchableOpacity>
      <View className='flex-1'>
        <Text className='text-white text-sm font-PoppinsSemiBold '>Current Location</Text>
        <Text className='text-white text-xs font-PoppinsRegular'>1220 Judge F. Perito</Text>
      </View>
      <View>
        <Feather name='shopping-bag' size={iconSize} color={COLORS.white} />
      </View>
    </View>

    {/* search bar */}
    <View>
      <View className='absolute z-10 h-full justify-center left-5'>
        <Feather name='search' 
          size={iconSize} 
          color={COLORS.black}
        />
      </View>
      <TextInput 
        placeholder='Seach for shops & restaurants' 
        placeholderTextColor={'black'}
        className='bg-white rounded-full pl-12 text-sm py-2'
      />
    </View>
    <Lottie 
        source={require('../assets/animations/halloween-search.json')} autoPlay loop 
        style={{width: 75, height: 75, position: 'absolute', zIndex: 100, right: 12, top: 15}}
      />
  </View>
  )
}

export default HeaderHalloween