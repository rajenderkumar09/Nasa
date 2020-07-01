import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Constants } from './Constants.js';
import {NavigationActions} from 'react-navigation-stack';


export default class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AsyncStorage.getItem(Constants.ActiveUser).then( user => {
            if (user == undefined || user == '' || user == null) {
                this.openLogin()
            } else {
                this.openHome()
            }
        });
    }

    openLogin() {
        this.props.navigation.navigate('Auth');
     }
   
     openHome() {
       this.props.navigation.navigate('Home');
     }

    render() {
        return (
            <View style={{backgroundColor:'red'}} />
        )
    }
}