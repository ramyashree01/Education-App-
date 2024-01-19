import { View, Text,Image } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MyLearning from '../tabs/MyLearning'
import Wishlist from '../tabs/Wishlist'
import Featured from '../tabs/Featured'
import Search from '../tabs/Search'
import User from '../tabs/User'

const Main = () => {
  const [selectedTab,setSelectedTab]=useState([0])

  return (

    <View style={{flex:1}}>
      {
        selectedTab==0?(<Featured/>):selectedTab==1?(<Search/>):selectedTab==2?(<MyLearning/>):selectedTab==3?(<Wishlist/>):(<User/>)
      }
      <View style={{position:'absolute',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',bottom:0,backgroundColor:'#fff',height:60,width:'100%'}}>
       <TouchableOpacity 
       style={{width:'20%',height:'20%',
       justifyContent:'center',alignItems:'center'}} onPress={()=>{ setSelectedTab(0)}}>
        <Image source={require('../IMAGES/feature_fill.png')} style={{width:24,height:24}}/>
       </TouchableOpacity>

       {/* <TouchableOpacity style={{width:'20%',height:'20%',justifyContent:'center',alignItems:'center'}}  onPress={()=>{ setSelectedTab(1)}}>
        <Image source={require('../IMAGES/search.png')} style={{width:24,height:24}} />
       </TouchableOpacity>


       <TouchableOpacity style={{width:'20%',height:'20%',justifyContent:'center',alignItems:'center'}}  onPress={()=>{ setSelectedTab(3)}}>
        <Image source={require('../IMAGES/love.png')} style={{width:24,height:24}} />
       </TouchableOpacity>
    */}
    
    <TouchableOpacity style={{width:'20%',height:'20%',justifyContent:'center',alignItems:'center'}}  onPress={()=>{ setSelectedTab(2)}}>
        <Image source={require('../IMAGES/play.png')} style={{width:24,height:24}}  />
       </TouchableOpacity>
       <TouchableOpacity style={{width:'20%',height:'20%',justifyContent:'center',alignItems:'center'}} onPress={()=>{ setSelectedTab(4)}}>
        <Image source={require('../IMAGES/user.png')} style={{width:24,height:24}}   />
       </TouchableOpacity>
        </View>
        </View>
  )
}

export default Main