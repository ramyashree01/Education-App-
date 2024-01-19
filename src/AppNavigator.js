import React ,{useEffect}from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Main from './screens/Main';
import OnboardingScreen from './screens/OnboardingScreen';
import ViewCourse from './screens/ViewCourse';
import VideoScreen from './screens/VideoScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from './screens/SignupScreen';
import icon from 'react-native-vector-icons';
const Stack = createStackNavigator();

const AppNavigator=()=>{

    const [isFirstLaunch,setIsFirstLaunch]=  React.useState(null);

    useEffect(()=>{
        AsyncStorage.getItem('alreayLauched').then(value=>{
            if(value==null)
            {
                AsyncStorage.setItem('alreadyLauched','true');
                setIsFirstLaunch(true);
            }
            else{
                setIsFirstLaunch(false);
            }
        });
    },[]);

    if(isFirstLaunch===null)
    {
        return null;

    }else if(isFirstLaunch===true)
    {
        return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name='OnboardingScreen'
                component={OnboardingScreen}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{headerShown:false}}
                />
                          
                <Stack.Screen
                name='Splash'
                component={Splash}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name='Main'
                component={Main}
                options={{headerShown:false}}
                />
                 <Stack.Screen
                name='ViewCourse'
                component={ViewCourse}
                options={{headerShown:false}}
                />

                <Stack.Screen
                name='VideoScreen'
                component={VideoScreen}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={({navigation})=>({
                    title:' ',
                    headerStyle:{
                        backgroundColor:'#f9fafd',
                        shadowColor:'#f9fafd',
                        elevation:0,
                    },
                    headerLeft:()=>(
                        <View style={{marginLeft:10}}>
                            <FontAwesome.Button
                            name="long-arrow-left"
                            size={25}
                            backgroundColor="#f9fafd"
                            color="#333"
                            onPress={
                                ()=>navigation.navigate('LoginScreen')
                            }
                            />
                        </View>
                ),
                })}
                />
            </Stack.Navigator>
                 </NavigationContainer>
        );
    }
    else{
        <LoginScreen/>
    }
}

export default AppNavigator;