import {View, Text, Image,Dimensions} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video from 'react-native-video';

import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';


const featuredCourses=[
  {
title:'Introduction to data science ',
video:require('../IMAGES/a.mp4')
},
{
  title:'MachineLearning                    ',
  video:require('../IMAGES/b.mp4')

},
{
title:'Pandas dataframes                ',
video:require('../IMAGES/c.mp4')

},
{
  title:'Decision Trees                         ',
  video:require('../IMAGES/d.mp4')

  },
  {
    title:'Linear Regression                   ',
    video:require('../IMAGES/e.mp4')

    },
    {
      title:'Continued LinearRegression',
      video:require('../IMAGES/f.mp4')
      },
      {
        title:'Vectors and statistics            ',
        video:require('../IMAGES/g.mp4')

      },
        {
          title:'Unsupervised Learning          ',
          video:require('../IMAGES/h.mp4')

        }
];
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const videoAspectRatio = 16 / 9; 
const calculateHeight = (width) => width / videoAspectRatio;
const ViewCourse = () => {
  const route = useRoute(0);
  const [footerVisible, setFooterVisible] = useState(false);

  const navigation=useNavigation();
  return (
    <ScrollView>
      <View style={{flex: 1,backgroundColor:'white'}}>
        <View
          style={{
            width: '100%',
            height: 200,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: route.params.data.image}}
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 200,
              margin: 10,
              marginTop: 20,
            }}
          />
        {/* <TouchableOpacity
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent:'center',
              alignItems:'center'
            }}  onPress={()=>{
navigation.navigate('VideoScreen');
            }}>

              <Image source={require('../IMAGES/play.png')}
        style={{width:50,height:50}}
        
          /></TouchableOpacity>*/}

        </View>

        <Text
          style={{
            fontSize: 27,
            fontWeight: 900,
            marginTop: 10,
            marginLeft: 40,
            color:'#e09846'
          }}>
          {route.params.data.title}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
          }}>
          {'Machine Learning is a branch of artificial intelligence that develops algorithms by learning the hidden patterns of the datasets used it to make predictions on new similar type data, without being explicitly programmed for each task.'}
        </Text>

        <View>
          <Text style={{marginLeft: 20,alignItems:'center',justifyContent:'center',marginLeft:150,color:'black',fontSize:20}}>posted by</Text>
 
      <Text style={{fontWeight: 'bold',fontSize:30,alignContent:'center',alignItems:'center',marginLeft:135, color: '#e09846'}}>
            {route.params.data.tutor}
          </Text>
          <View style={{marginTop: 3}}>
            <FlatList
              data={[
                {
                  title: 'Recently updated ',
                  icon: require('../IMAGES/description.icon.png'),
                },
                {
                  title: 'English ',
                  icon: require('../IMAGES/lamguage.png'),
                },
                {
                  title: 'English ',
                  icon: require('../IMAGES/caption.png'),
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                      marginLeft:140,
                      color:'black'
                    }}>
                    <Image
                      source={item.icon}
                      style={{
                        width: 24,
                        marginLeft: 3,
                        height: 24,
                      }}
                    />
                    <Text
                      style={{marginLeft: 9,fontWeight:800, color: 'black',
                       fontSize: 18}}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 100,
            height:30,
            marginTop:20,
            backgroundColor: '#e09846',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 100,
            marginLeft:150
          }}  >
          <Text style={{color:'black',fontWeight:800}}> Best Course</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: 'black',
              marginTop: 20,
              marginLeft: 140,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Curriculum
          </Text>
          <View
            style={{
              color: 'black',
            }}>
            <Text style={{color: 'black',alignItems:'center',marginLeft:165}}>
              {'8 lectures '}
            </Text>
          </View>
          <View>
            <FlatList
              data={featuredCourses}
              renderItem={({item, index}) => {
                return (
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', color: 'black'}}>
                      <Text
                        style={{color: 'black', fontSize: 30, marginLeft: 20}}>
                        {index + 1}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 21,
                          color: 'black',
                          fontWeight:500,
                          marginTop: 20,
                          marginLeft: 10,
                        }}>
                        {item.title}
                      </Text>
                      <Text style={{color: 'black'}}></Text>
                    </View>
                    
                    <TouchableOpacity    onPress={()=>{
                        navigation.navigate('VideoScreen', { videoSource: item.video });
                      }}>
                        <TouchableOpacity onPress={() => {
                  navigation.navigate('VideoScreen', { vS: item.video });
                }}></TouchableOpacity>
                 <View>
                    <Image
                      source={require('../IMAGES/play.png')}
                      style={{width: 24, height: 24, marginLeft:60}}
                   
                    /></View>
                    
                    </TouchableOpacity>




                  </View>
                );
              }}
            />

          
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewCourse;
