import { View, Text,Image } from 'react-native'
import React, { useEffect ,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import LoginScreen from './LoginScreen'
const Splash = () => {
  const navigation=useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('LoginScreen');
    },3000)
  },[]);
  return (
    <View style={{flex:1,justifyCenter:'center',backgroundColor:'black',alignItem:'center'}}>
    <Image
    source={require('../IMAGES/AD2.png')}
    style={{width:400,height:100,backgroundColor:'black',justifyContent:'center',alignItems:'center',marginTop:300}}
    />
    </View>
  )
}

export default Splash