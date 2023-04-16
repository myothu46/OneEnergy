import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomePage({ navigation }) {
    const [username, setUsername] = useState('');

    const login = () => {
        alert('h')
        alert(username)
    }

    const handleUsername = (text) => {
        setUsername(text);
    };

    return (
        <View >
            <TextInput
                underlineColorAndroid="transparent"
                onChangeText={handleUsername}
                placeholder="Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
            />

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={login}>
                <Text >LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}