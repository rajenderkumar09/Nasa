/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import { Text } from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);

    //Fix Text uppercase for android
    Text.defaultProps.uppercase = false;
  }

  render() {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}

