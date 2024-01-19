import React, { useState, useEffect } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const PSU = () => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const onAuthStateChanged = (user) => {
    if (user) {
      console.log('User is authenticated:', user);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const confirmCode = async () => {
    try {
      if (confirm) {
        await confirm.confirm(code);
      } else {
        console.warn('Confirmation not yet received.');
      }
    } catch (error) {
      console.error('Error confirming code:', error);
    }
  };

  if (!confirm) {
    return (
      <View>
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+91 8431505335')}
        />
      </View>
    );
  }

  return (
    <View>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={confirmCode} />
    </View>
  );
};

export default PSU;
