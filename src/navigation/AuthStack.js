import React ,{useEffect}from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormButton from '../components/FormButton';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Main from '../screens/Main';
import OnboardingScreen from '../screens/OnboardingScreen';
import ViewCourse from '../screens/ViewCourse';
import VideoScreen from '../screens/VideoScreen';
import FPS from '../screens/FPS';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from '../screens/SignupScreen';
import icon from 'react-native-vector-icons';
import PSU from '../screens/PSU'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthProvider } from './AuthProvider';
import Result from '../quiz/screens/result';
const Stack = createStackNavigator();

const AuthStack=()=>{

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

        GoogleSignin.configure({
          webClientId:'601223993967-qlqmtio5rinkc67rc19lba8vi9juaou0.apps.googleusercontent.com',
        });
    },[]);

    if (isFirstLaunch === null) {
        return null; 
      } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
      } else {
        routeName = 'Splash';
      }
      return(
      <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
                name='Splash'
                component={Splash}
                options={{headerShown:false}}
                />

<Stack.Screen
                name='Result'
                component={Result}
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
                name='FPS'
                component={FPS}
                options={{headerShown:false}}
                />

<Stack.Screen
                name='PSU'
                component={PSU}
                options={{headerShown:false}}
                />

      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FormButton
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('LoginScreen')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
      );
};
 

export default AuthStack;