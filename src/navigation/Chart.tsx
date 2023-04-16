import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import globalStyle from '../../global/global-style';
import { Colors } from '../../global/colors';
import { Sizes } from '../../global/size';

export default function ChartPage({ navigation }) {
    const [username, setUsername] = useState('');

    const login = () => {
        alert('h')
        alert(username)
    }

    const handleUsername = (text) => {
        setUsername(text);
    };

    return (
        <SafeAreaView style={globalStyle.full_screen}>
            <StatusBar animated={true} hidden={false} />

            <View style={[globalStyle.horizontal]}>
                <View style={[globalStyle.right, globalStyle.toolbar_icon_style]}></View>
                <View style={[globalStyle.full_center]}>
                    <Text style={[globalStyle.gray, globalStyle.header]}>Charts</Text>
                </View>
                <TouchableOpacity style={[globalStyle.right]}>
                    <Image source={require('../Images/notification.png')} style={[globalStyle.toolbar_icon_style]} />
                </TouchableOpacity>
            </View>

            <Text>Chart Page</Text>

        </SafeAreaView>
    );
}