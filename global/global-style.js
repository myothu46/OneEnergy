import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export default globalStyle = StyleSheet.create({
    full_screen: {
        flex: 1
    },
    full_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row'
    },
    white: {
        color: Colors.white
    },
    black: {
        color: Colors.black
    },
    gray: {
        color: Colors.gray
    },
    background_gray: {
        backgroundColor: Colors.gray,
        color: Colors.red
    },
    red: {
        color: Colors.red
    },
    background_red: {
        backgroundColor: Colors.red,
        color: Colors.white
    },
    button_font_size: {
        fontSize: 18
    }

})