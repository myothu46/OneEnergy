import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";
import globalStyle from '../../global/global-style';
import { Colors } from '../../global/colors';
import { Sizes } from '../../global/size';

export default class AppliancesPage extends React.Component {
    state = {
        date: new Date(),
        showPicker: false,
        dateString: ''
    }

    handleConfirm(date) {
        this.setState({
            date: date,
            dateString: date.toString()
        })
        this.setState({ showPicker: false })
    };

    render() {
        return (
            <SafeAreaView style={globalStyle.full_screen} >
                <StatusBar animated={true} hidden={false} />

                <View style={[globalStyle.horizontal]}>
                    <View style={[globalStyle.right, globalStyle.toolbar_icon_style]}></View>
                    <View style={[globalStyle.full_center]}>
                        <Text style={[globalStyle.gray, globalStyle.header]}>Appliances</Text>
                    </View>
                    <TouchableOpacity style={[globalStyle.right]}>
                        <Image source={require('../Images/notification.png')} style={[globalStyle.toolbar_icon_style]} />
                    </TouchableOpacity>
                </View>

                <DateTimePickerModal
                    isVisible={this.state.showPicker}
                    mode="date"
                    onConfirm={(val) => this.handleConfirm(val)}
                    onCancel={() => this.setState({ showPicker: false })}
                    date={this.state.date} />

                <ScrollView>
                    <View>
                        <Card style={[globalStyle.padding]} onPress={() => this.setState({ showPicker: true })}>
                            <Card.Content>
                                <View style={[globalStyle.horizontal]}>
                                    <MaterialCommunityIcons name="calendar-month" size={Sizes.logo_font_size} />
                                    <View style={[globalStyle.full_screen, globalStyle.center_horizontal]}>
                                        <View>
                                            <Text style={[styles.date_style]}>Select Date</Text>
                                            <Text style={[globalStyle.red, styles.date_style]}>
                                                {this.state.dateString}
                                            </Text>
                                        </View>
                                    </View>
                                    <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={Sizes.logo_font_size} style={[globalStyle.right]} />
                                </View>

                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    card_title: {
        fontSize: Sizes.normal_font_size
    },
    date_style: {
        fontSize: Sizes.normal_font_size,
        textAlign: 'center'
    }
})