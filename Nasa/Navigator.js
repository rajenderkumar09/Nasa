import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack';

import Router from './Router';

import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Home from './src/screens/home';

const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
}, {
  hearderMode: { visible:false}
})

const AuthNavigator = createStackNavigator({
  Signin: { screen: Signin },
  Signup: { screen: Signup },
}, {
  initialRouteName: 'SignIn',
  hearderMode: { visible:true}
})

const Navigator = createAppContainer(
    createSwitchNavigator(
      {
        Router: { screen: Router },
        Home: { screen: HomeNavigator },
        Auth: { screen: AuthNavigator }
      },
      {
        initialRouteName: 'Router',
        headerMode: { visible: true }
      }
    )
  );

  export default Navigator;