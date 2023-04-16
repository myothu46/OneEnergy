import React, { createRef } from 'react';
import {
    SafeAreaView, View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity,
    Image, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyle from '../../global/global-style';
import CheckBox from '@react-native-community/checkbox'
import { Colors } from '../../global/colors';
import { Sizes } from '../../global/size';

const passwordInputRef = createRef();

export default class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        errortext: '',
        remember: false,
        hidePassword: true
    }

    componentDidMount() {
        AsyncStorage.getItem('remember').then((value) => {
            value == 'r' ? this.setState({ remember: true }) : this.setState({ remember: false })
            if (value == 'r') {
                AsyncStorage.getItem('email').then((value) => this.setState({ email: value }))
                AsyncStorage.getItem('pass').then((value) => this.setState({ password: value }))
            }
        })
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

        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem('pass', pass);
        AsyncStorage.setItem('remember', this.state.remember ? 'r' : 'u');

        this.props.navigation.navigate('home')
    }

    forgotPassword() {
        AsyncStorage.getItem('pass').then((value) => alert('Your Password is "' + value + '"'));
    }

    render() {
        return (
            <SafeAreaView style={globalStyle.full_center}>
                <StatusBar hidden={true} />

                <View style={globalStyle.horizontal}>
                    <Text style={[globalStyle.gray, globalStyle.logo]}>ONE</Text>
                    <Text style={[globalStyle.red, globalStyle.logo]}>NERGY</Text>
                </View>

                {this.state.errortext != '' ? (
                    <Text style={[globalStyle.red, styles.errorTextStyle]}>
                        {this.state.errortext}
                    </Text>
                ) : null}

                <View style={styles.SectionStyle}>
                    <Image source={require('../Images/email.png')} style={globalStyle.icon_style} />
                    <TextInput
                        style={[globalStyle.full_screen, styles.InputStyle]}
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
                    <Image source={require('../Images/password.png')} style={globalStyle.icon_style} />
                    <TextInput
                        style={[globalStyle.full_screen, styles.InputStyle]}
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
                            <Image source={require('../Images/visible.png')} style={globalStyle.icon_style} />
                        </TouchableOpacity>) :

                        (<TouchableOpacity onPress={() => this.hidePassword(true)}>
                            <Image source={require('../Images/hide.png')} style={globalStyle.icon_style} />
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
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: Colors.gray,
        height: RFValue(Sizes.input_size, 580),
        borderRadius: Sizes.input_border_radius,
        margin: Sizes.margin
    },
    InputStyle: {
        fontSize: RFValue(Sizes.normal_font_size, 580)
    },
    buttonStyle: {
        borderWidth: 0,
        alignItems: 'center',
        height: RFValue(Sizes.button_height, 580),
        borderRadius: Sizes.bottom_radius,
        marginLeft: Sizes.button_height,
        marginRight: Sizes.button_height,
        marginTop: Sizes.margin,
        marginBottom: Sizes.margin,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    errorTextStyle: {
        textAlign: 'center',
        fontSize: RFValue(Sizes.small_font_size, 580),
    },
    rememberStyle: {
        alignItems: 'center',
        marginTop: Sizes.margin,
        marginBottom: Sizes.margin
    },
    rememberCheckBoxStyle: {
        width: RFValue(Sizes.small_font_size, 580),
        height: RFValue(Sizes.small_font_size, 580)
    },
    smallFontTextStyle: {
        color: Colors.red,
        fontSize: RFValue(Sizes.small_font_size, 580),
        marginLeft: Sizes.margin
    }
})
