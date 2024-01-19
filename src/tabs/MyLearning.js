import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../quiz/screens/home';

import Quiz from '../quiz/screens/quiz';

import Result from '../quiz/screens/result';
import { AuthProvider } from '../navigation/AuthProvider';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <AuthProvider>
    <Stack.Navigator>
     
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />

   
    </Stack.Navigator>
    </AuthProvider>
  );
}

export default MyStack;
