import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    itemStyle:{
        justifyContent:'space-between',
    },
    titleText: {
        color: 'black',
        textAlign: 'left',
        fontSize: 16,
        ...Platform.select({
            ios: { fontWeight: '600' },
            android: { fontFamily: 'SF-Pro-Display-Regular', }
        }),
    },
    valueText: {
        color: '#1c1c1b',
        textAlign: 'left',
        fontSize: 16,
        ...Platform.select({
            ios: { fontWeight: '400' },
            android: { fontFamily: 'SF-Pro-Display-Regular', }
        }),
    },
})