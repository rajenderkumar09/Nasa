import React from 'react';
import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    inputText: {
        color: 'black',
        textAlign: 'left',
        paddingLeft: 0,
        marginLeft: 0,
        fontSize: Style.FONT_SIZE(16),
        ...Platform.select({
            ios: { fontWeight: '400'/*, fontFamily: 'system font' */ },
            android: { fontFamily: 'SF-Pro-Display-Regular', }
        }),
    },
})