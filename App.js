import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import loadingScreen from './screen/loadingScreen'
import loginScreen from './screen/loginScreen'
import registerScreen from './screen/registerScreen'
import homeScreen from './screen/homeScreen'

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD-oLFCs532PU9Qg3on0n7fyLDFBO2clR0",
  authDomain: "chatbot-fca4b.firebaseapp.com",
  databaseURL: "https://chatbot-fca4b.firebaseio.com",
  projectId: "chatbot-fca4b",
  storageBucket: "chatbot-fca4b.appspot.com",
  messagingSenderId: "288020671817",
  appId: "1:288020671817:web:11d50f7fe4452a15e63e98"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  home: homeScreen
});

const AuthStack = createStackNavigator({
  login: loginScreen,
  register: registerScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      loading: loadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "loading"
    }
  )
);