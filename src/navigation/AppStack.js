import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/Main';
const Stack=createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Main}/>
    </Stack.Navigator>
  )
}

export default AppStack