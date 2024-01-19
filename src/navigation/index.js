import React from 'react';
import Routes from './Routes';
import { AuthProvider } from './AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from '../tabs/MyLearning';

const Providers = () => {
  return (
    <AuthProvider>
            <Routes />
            <MyStack/>
    </AuthProvider>
  );
}

export default Providers;