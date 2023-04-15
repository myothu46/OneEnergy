import React, { useState, createRef } from 'react';
import {
    SafeAreaView, View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity,
    Image, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import globalStyle from '../global-style';
import CheckBox from '@react-native-community/checkbox'
import { Colors } from '../colors';
import { RFValue } from "react-native-responsive-fontsize";

const passwordInputRef = createRef();

export default class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        errortext: '',
        remember: false,
        hidePassword: true
    }

    hidePassword(val) {
        this.setState({ hidePassword: val })
    }

    login(email, pass) {
        if (!email) {
            this.setState({ errortext: 'Please Enter Email' });
            return;
        } else {
            this.setState({ errortext: '' });
        }
        if (!pass) {
            this.setState({ errortext: 'Please Enter Password' });
            return;
        } else {
            this.setState({ errortext: '' });
        }
        this.props.navigation.navigate('home')
    }

    forgotPassword() {
        alert('Forgot Password')
    }

    render() {
        return (
            <SafeAreaView style={globalStyle.full_center}>
                <StatusBar hidden={true} />

                <View style={globalStyle.horizontal}>
                    <Text style={[globalStyle.gray, styles.logo]}>ONE</Text>
                    <Text style={[globalStyle.red, styles.logo]}>NERGY</Text>
                </View>

                {this.state.errortext != '' ? (
                    <Text style={[globalStyle.red, styles.errorTextStyle]}>
                        {this.state.errortext}
                    </Text>
                ) : null}

                <View style={styles.SectionStyle}>
                    <Image source={require('../Images/email.png')} style={styles.ImageStyle} />
                    <TextInput
                        style={globalStyle.full_screen}
                        underlineColorAndroid="transparent"
                        onChangeText={(email) =>
                            this.setState({ email })
                        }
                        placeholder="Email"
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            passwordInputRef.current &&
                            passwordInputRef.current.focus()
                        }
                        blurOnSubmit={false}
                        value={this.state.email}
                    />
                </View>

                <View style={styles.SectionStyle}>
                    <Image source={require('../Images/password.png')} style={styles.ImageStyle} />
                    <TextInput
                        style={globalStyle.full_screen}
                        onChangeText={(password) =>
                            this.setState({ password })
                        }
                        placeholder="Password"
                        keyboardType="default"
                        ref={passwordInputRef}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={this.state.hidePassword}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        value={this.state.password}
                    />
                    {this.state.hidePassword ? (
                        <TouchableOpacity onPress={() => this.hidePassword(false)}>
                            <Image source={require('../Images/visible.png')} style={styles.ImageStyle} />
                        </TouchableOpacity>) :

                        (<TouchableOpacity onPress={() => this.hidePassword(true)}>
                            <Image source={require('../Images/hide.png')} style={styles.ImageStyle} />
                        </TouchableOpacity>)}
                </View>

                <View style={[globalStyle.horizontal, styles.rememberStyle]}>
                    <CheckBox
                        disabled={false}
                        value={this.state.remember}
                        onValueChange={() => {
                            this.setState({
                                remember: !this.state.remember
                            })
                        }}
                        tintColor={Colors.red}
                        onCheckColor={Colors.red}
                        onTintColor={Colors.red}
                        boxType='square'
                        style={styles.rememberCheckBoxStyle}
                    />
                    <Text style={styles.smallFontTextStyle}> Remember Me</Text>
                </View>

                <TouchableOpacity
                    style={[globalStyle.background_red, styles.buttonStyle]}
                    activeOpacity={0.5}
                    onPress={() => this.login(this.state.email, this.state.password)}>
                    <Text style={[globalStyle.white, globalStyle.button_font_size]}>LOGIN</Text>
                </TouchableOpacity>


                <TouchableWithoutFeedback onPress={() => this.forgotPassword()}>
                    <Text style={styles.smallFontTextStyle}>Forgot Password?</Text>
                </TouchableWithoutFeedback>

            </SafeAreaView >
        );
    }
}


const styles = StyleSheet.create({
    logo: {
        fontSize: RFValue(30, 580),
        marginBottom: RFValue(30, 580)
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: Colors.gray,
        height: RFValue(30, 580),
        borderRadius: 5,
        margin: 10
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    buttonStyle: {
        borderWidth: 0,
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    errorTextStyle: {
        textAlign: 'center',
        fontSize: RFValue(14, 580),
    },
    rememberStyle: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    rememberCheckBoxStyle: {
        width: RFValue(14, 580),
        height: RFValue(14, 580)
    },
    smallFontTextStyle: {
        color: Colors.red,
        fontSize: RFValue(14, 580),
        marginLeft: 10
    }
})
