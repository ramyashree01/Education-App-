// ForgotPasswordScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      // Send a password reset email
      await auth().sendPasswordResetEmail(email);

      // Prompt the user to enter the new password
      Alert.alert(
        'Password Reset Email Sent',
        'Check your email for instructions to reset your password. Enter your new password below.',
        [
          {
            text: 'OK',
            onPress: async () => {
              // Use the new password for authentication
              await auth().signInWithEmailAndPassword(email, newPassword);

              // Navigate to the desired screen after successful login
              navigation.navigate('LoginScreen'); // Replace 'Home' with your screen name
            },
          },
        ]
      );
    } catch (error) {
      console.error('Password Reset Failed:', error.message);
      Alert.alert('Password Reset Failed', error.message);
    }
  };

  return (
    <View >
      <Text style={{color:'black',fontSize:20,fontWeight:500}}> Forgot Password</Text>
      <TextInput  style={{color:'black',borderColor:'black',borderWidth:2,marginTop:30}}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
   
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;
