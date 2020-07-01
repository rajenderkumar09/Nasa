import axios from 'axios';
import {apiConfig} from '../configs/config';

export function  get(...args) {
    let endPoint = args[0];
    let URL = `${apiConfig.baseUrl}${endPoint}`;
    try {
      return fetch(URL).then(res => {
        return res.json();
      });
    } catch (error) {
      alert('result:' + error);
      throw new Error(error);
    }
  }
  
  export function post(...args) {
    let endPoint = args[0];
    let params = args[1];
    let headers = args[2] == undefined ? {} : args[2];
    
    let URL = `${apiConfig.baseUrl}${endPoint}`;
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


