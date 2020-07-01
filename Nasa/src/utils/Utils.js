/* Utils.js */
/* This file contains functions you can use anywhere in your application */
import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Constants } from '../../Constants.js';

export {
  getRequest,
  postRequest,
  validateEmail,
  validatePassword,
  alert,
};

//Method to validate email.
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


function validatePassword(password) {
  var passwordReg = /^(?=.*[A-Z])(?=.*[!-:@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,16}$/;
  return passwordReg.test(password);
};

function getRequest(...args) {
  let endPoint = args[0];
  let URL = `${Constants.APIHOST}/${endPoint}`;
  try {
    return fetch(URL).then(res => {
      return res.json();
    });
  } catch (error) {
    alert('result:' + error);
    throw new Error(error);
  }
}

function postRequest(...args) {
  let endPoint = args[0];
  let params = args[1];
  let headers = args[2] == undefined ? {} : args[2];

  headers.version = DeviceInfo.getVersion()

  let URL = `${Constants.APIHOST}/${endPoint}`;
  try {
    return fetch(URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params) 
    }).then(res => {
      return res.json();
    });
  } catch (error) {
    alert('result:' + error);
    throw new Error(error);
  }
}

function alert(title, message, callback = null) {
  Alert.alert(title, message, [
    { text: 'OK', onPress: callback, style: 'cancel' }
  ]);
}
