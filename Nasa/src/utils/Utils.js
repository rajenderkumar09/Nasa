/* Utils.js */
/* This file contains functions you can use anywhere in your application */

import { Alert } from 'react-native';


export function alert(title, message, callback = null) {
  Alert.alert(title, message, [
    { text: 'OK', onPress: callback, style: 'cancel' }
  ]);
}

 
