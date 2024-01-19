import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './Routes';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const navigation = useNavigation();
  const [errorText, setErrorText] = useState(null);

  const [authEt, setAuthEt] = useState(null); 


  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authEt,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Main');
            console.log('user after login:', auth().currentUser);

          
          } catch (e) {
            console.log(e);
          }
        },
    
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            navigation.navigate('LoginScreen');

          }
           catch (error) {
            const errorCode = error.code;
            setAuthEt(
              errorCode === 'auth/email-already-in-use'
                ? 'The email address is already in use by another account.'
                : 'An error occurred. Please try again later.'
            );
          }
        }
        ,
        logout: async()=>{
          try{
            navigation.navigate('LoginScreen')

            await auth.signOut();
            setUser(null);
            if (auth().currentUser) {
              console.log('Logout failed: User is still authenticated.');
            } else {
              console.log('Logout successful: User is signed out.');
            }

          }catch(e){
            console.log(e);
          }
        }

      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider};