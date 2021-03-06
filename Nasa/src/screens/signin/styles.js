import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    inputText: {
        width:'100%',
        color: 'black',
        fontSize: 16,
        marginBottom:8,
        ...Platform.select({
            ios: { fontWeight: '400' },
            android: { fontFamily: 'SF-Pro-Display-Regular', }
        }),
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        ...Platform.select({
            ios: { fontWeight: '600' },
            android: { fontFamily: 'SF-Pro-Display-Regular', }
        }),
    },
    button:{
        borderColor:'black'
    },
    disable:{
        borderColor:'gray'
    }

})