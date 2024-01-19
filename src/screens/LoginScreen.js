import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Button,
  Alert
} from 'react-native';
import FPS from './FPS';
import auth from '@react-native-firebase/auth'
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../navigation/AuthProvider';
import {AppStack} from '../navigation/AppStack';
import {AuthStack} from '../navigation/AuthStack';
import PSU from './PSU';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  const [et, setEt] = useState(null);

  const handleSignUp = () => {
    if (!password ) {
      setEt('Please enter password.');
    } else {
      setEt(null);
    login(email, password)    }
  };



  const {login,googleLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../IMAGES/AD.jpg')}
        style={styles.logo}
      />
      <Text style={styles.text}>A Learning App</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={handleSignUp}

      />
 {et && (
        <View>
          <Text style={{ color: 'red' }}>{et}</Text>
        </View>
      )}

      {/*  <View>
<SocialButton
        buttonTitle="Sign In with PhoneNumber"
        onPress={() => navigation.navigate('PSU')}
      />
<SocialButton
        buttonTitle="Sign In with Google"
        onPress={() => googleLogin()}
      />
  </View>*/}

<TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('FPS')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 200,
    width: 210,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

