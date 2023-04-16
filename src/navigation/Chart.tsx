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

            <View style={[globalStyle.full_width, globalStyle.right]}>
                <TouchableOpacity >
                    <Image source={require('../Images/notification.png')} style={[globalStyle.toolbar_icon_style]} />
                </TouchableOpacity>
            </View>

            <View style={[globalStyle.horizontal, globalStyle.center_horizontal]}>
                <Text style={[globalStyle.gray, globalStyle.logo]}>ONE</Text>
                <Text style={[globalStyle.red, globalStyle.logo]}>NERGY</Text>
            </View>

            <Text>Chart Page</Text>

        </SafeAreaView>
    );
}