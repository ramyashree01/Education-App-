import React,{useContext,useEffect,useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';
import { AuthContext } from '../../navigation/AuthProvider'
import auth from '@react-native-firebase/auth';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const [user, setUser] = useState(null);

  
  useEffect(() => {

    const currentUser = auth().currentUser;

    if (currentUser) {
      setUser(currentUser);
      const postData = {
        userId: currentUser.uid,
        quizScore: score,
      };

    console.log('Inside Result useEffect - user:', user);
    console.log('Inside Result useEffect - score:', score);
    if (user) {
        setTimeout(() => {
            const postData = {
              userId: user.uid, 
              quizScore: score,
            };
      
      fetch('https://script.google.com/macros/s/AKfycbxX6_WVtjn8X1zqTl_7RAl4j34eQgF3ik-RQVRtxQ_ah4SCzG6PVEWsqo0noy5Zibb2/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }, 1000);
}  }}, [user, score,navigation]);


  const resultBanner= score>10?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" :"https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
  
  console.log('user:', user);
  console.log('score:', score);
  
  return (
    <View style={styles.container}>
<Title titleText='RESULTS' />
<Text style={styles.scoreValue}>{score}</Text>
<View style={styles.bannerContainer}>
  <Image
    source={{
      uri:resultBanner,
    }}
    style={styles.banner}
    resizeMode="contain"
  />
</View>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
  <Text style={styles.buttonText}>GO TO HOME</Text>
</TouchableOpacity>


</View>
  );
};



export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center',
    color:'blue'
  }
});
