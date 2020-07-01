import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/signin';
import Home from '../screens/home';

const Navigator = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Signin" screenOptions={{ gestureEnabled: false }} screenOptions={{
        headerShown: true
      }} >
        <Stack.Screen name="Signin" component={Signin} options={{title:"Nasa Astroid"}} />
        <Stack.Screen name="Home" component={Home} options={{title:"Astroid Details"}} />
      </Stack.Navigator>
    )
}

export default Navigator
