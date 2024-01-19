import {View, Text} from 'react-native';
import React from 'react';
import Main from './src/screens/Main';
import AppNavigator from './src/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import Providers from './src/navigation';
import MyStack from './src/tabs/MyLearning';
const App = () => {
  return (
      <NavigationContainer>
   <AuthProvider>
        <AuthStack>
          <Providers/>
          <MyStack/>
</AuthStack>
    </AuthProvider>     
     </NavigationContainer>
  );
};

export default App;
