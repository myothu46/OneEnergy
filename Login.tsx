import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import globalStyle from './global-style';

export default class LoginPage extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login() {
        alert(this.state.email)
    }

    render() {
        return (
            <View style={globalStyle.full_center} >
                <StatusBar hidden={true} />

                <View style={globalStyle.horizontal}>
                    <Text style={[globalStyle.gray, styles.one]}>ONE</Text>
                    <Text style={[globalStyle.red, styles.one]}>NERGY</Text>
                </View>

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />


                {/* <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('home')}
                /> */}

                <TouchableOpacity
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity >

            </View >
        );
    }
}


const styles = StyleSheet.create({
    one: {
        fontSize: 30
    },
    energy: {
        fontSize: 30
    }
})
