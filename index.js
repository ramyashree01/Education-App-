import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';

// Initialize Firebase
    const firebaseConfig = {
        apiKey: 'AIzaSyB2tP4dIbhqv71ifPdmV8SnYwh74fwWkfU',
        projectId: 'lms-app-111fc',
        appId: '1:601223993967:android:41c1936c304c9e23528b9a',
    }
      
  

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
