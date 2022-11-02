import { ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import { useState } from 'react';

import Header from '../components/Header'
import Categories from '../components/Categories'
import Cuisines from '../components/Cuisines';
import Promo from '../components/Promo';

import HeaderDark from '../components/HeaderDark';
import CategoriesDark from '../components/CategoriesDark';
import CuisinesDark from '../components/CuisinesDark';
import PromoDark from '../components/PromoDark';

import HeaderHalloween from '../components/HeaderHalloween';
import CategoriesHalloween from '../components/CategoriesHalloween';
import CuisinesHalloween from '../components/CuisinesHalloween';
import PromoHalloween from '../components/PromoHalloween';

import Entypo from 'react-native-vector-icons/Entypo'
import COLORS from '../constants/COLORS';

import Lottie from 'lottie-react-native';

const HomeScreen = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState('light');
  const handleToggleDarkMode = () => {
    let temp = '';
    if(toggleDarkMode === 'light') {
      temp = 'dark'
    } else if(toggleDarkMode === 'dark') {
      temp = 'halloween'
    } else if(toggleDarkMode === 'halloween') {
      temp = 'light'
    }
    
    setToggleDarkMode(temp)
  }
  
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor(toggleDarkMode === 'light' ? COLORS['primary-light'] : COLORS.black);
  return (
    <View className='flex-1'>

      {/* light mode */}
      {
        toggleDarkMode === 'light' &&
        <View className='flex-1 bg-white'>
          <TouchableOpacity 
            onPress={() => handleToggleDarkMode() }
            className='absolute z-40 bg-black rounded-full justify-center items-center p-3 bottom-10 right-5' 
            style={{ elevation: 10 }}
          >
            <Entypo name='light-up' size={28} color={COLORS.white}/>
          </TouchableOpacity>
          {/* header */}
          <Header />
          {/* content */}
          <ScrollView showsVerticalScrollIndicator={false}>
          {/* categories */}
            <Categories />

          {/* cuisines */}
            <Cuisines />

          {/* promo */}
            <Promo />
          </ScrollView>
        </View>
      }


      {/* dark mode */}
      {
        toggleDarkMode === 'dark' && 
        <View className='flex-1 bg-black'>
          <TouchableOpacity 
            onPress={() => handleToggleDarkMode() }
            className='absolute z-40 bg-white rounded-full justify-center items-center p-3 bottom-10 right-5' 
            style={{ elevation: 10 }}
          >
            <Entypo name='light-up' size={28} color={COLORS.black}/>
          </TouchableOpacity>
          {/* header */}
          <HeaderDark />
          {/* content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* categories */}
            <CategoriesDark />

            {/* cuisines */}
            <CuisinesDark />

            {/* promo */}
            <PromoDark />
          </ScrollView>
        </View>
      }

        {/* halloween mode */}
        {
        toggleDarkMode === 'halloween' && 
        <View className='flex-1 bg-white'>
          <TouchableOpacity 
            onPress={() => handleToggleDarkMode() }
            className='absolute z-40 bg-white rounded-full justify-center items-center p-3 bottom-10 right-5' 
            style={{ elevation: 10 }}
          >
            <Entypo name='light-up' size={28} color={COLORS.black}/>
            <Lottie 
              source={require('../assets/animations/halloween-eye.json')} autoPlay loop 
              style={{width: 28, height: 28, position: 'absolute'}}
            />
          </TouchableOpacity>
          {/* header */}
          <HeaderHalloween />
          {/* content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* categories */}
            <CategoriesHalloween />

            {/* cuisines */}
            <CuisinesHalloween />

            {/* promo */}
            <PromoHalloween />
          </ScrollView>
        </View>
      }
    </View>
  )
}



export default HomeScreen