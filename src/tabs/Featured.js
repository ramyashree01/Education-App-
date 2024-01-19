import {View, Text, TouchableOpacity, FlatList, ScrollView, Image} from 'react-native';
import React from 'react';
import { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../navigation/AuthProvider';
const featuredCourses=[
  {
title:'Machine Learning ',
image:'https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg',
tutor:'EnhanzED',
isBestSeller:true,
},
{
  title:'Learn ML ',
  image:'https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg',
  tutor:'EnhanzED',
  isBestSeller:true,
},
{
title:'Learn ML ',
image:'https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg',
tutor:'EnhanzED',
isBestSeller:true,
}
];

const Featured = () => {
  const {logout}=useContext(AuthContext);


  const navigation=useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../IMAGES/woman.jpg')}
          style={{width: '100%', height: 400}}
        />

        <Text
          style={{fontSize: 30, color: '#e09846', marginLeft: 10, fontWeight: 900}}>
          Learn from Experience 
        </Text>

        <Text style={{fontSize:25,marginRight: 20, marginLeft: 20,color:'black',fontWeight:600}}>
          Our Courses Have a real World knowledge that help u to achieve your goals!
        </Text>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#e6e00',
            alignSelf: 'center',
          }}>
          <Text style={{color:'purple',fontWeight:400,alignSelf:'center',fontWeight:500,fontSize:30}}>Learn from experts</Text>
        </View>

        <Text
          style={{
            marginTop: -10,
            marginLeft: 20,
            fontSize: 20,
            fontWeight: 800,
            color: '#000',
          }}>
          Featured
        </Text>
        <View style={{width: '100%',height:400, marginBottom: 150, marginTop: 10}}>
          <FlatList
            data={featuredCourses}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={{width:300,
                marginLeft:30,backgroundColor:'#e09846',
                }}onPress={()=>{
                  navigation.navigate('ViewCourse',{
                    data:item,}   );
                 
                }}>
                  <View
                    style={{
                      width: 300,
                      height: 200,
                    }}>
                    <Image
                    source={{uri:item.image,}}                   
                       style={{width: '100%', height: 180}}
                    />

                    <Text
                      style={{
                        fontSize: 30,
                        color: '#000', 
                        fontWeight: 600,
                        marginLeft: 10,
                        marginTop: 10,
                      }}>
                        {item.title}                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#000',
                        fontWeight: '600',
                        marginLeft: 10,
                        marginTop: 10,
                      }}>
                        {item.tutor}                    </Text>
                  </View>

                  {item.isBestSeller?( <View
                    style={{
                      backgroundColor: '#BeBeBe',
                      marginTop: 170,
                      justifyContent: 'center',
                      alignItems: 'center',
                      Width: 100,
                      height: 30,
                    }}>
                    <Text style={{color: 'blue'}}>Best Course</Text>
                  </View>):null}
                 
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          marginRight:20,
          marginLeft:20,
          backgroundColor: 'white',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:420
        }}
          onPress={()=>logout()}>
        
      
      <Text style={{color: 'purple',fontSize:30,fontWeight:600}}>Logout</Text>
      </TouchableOpacity>
        </View>
      </View>   
    </ScrollView>
  );
};

export default Featured;
