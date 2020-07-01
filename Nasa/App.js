/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Container} from 'native-base';
import Navigator from './Navigator';


export default class App extends Component {
  render() {
    return (
      <Container>
        <Navigator />
      </Container>
    );
  }
}
