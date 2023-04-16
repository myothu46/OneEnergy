import React, { useState } from 'react';
import {
    SafeAreaView, View, Image, TouchableOpacity, StatusBar, StyleSheet,
    ScrollView
} from 'react-native';
import { Card, Text } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";
import { LineChart } from 'react-native-charts-wrapper';
import globalStyle from '../../global/global-style';
import { Colors } from '../../global/colors';
import { Sizes } from '../../global/size';

export default class ChartPage extends React.Component {

    render() {
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

                {/* <ScrollView> */}
                {/* <View style={[globalStyle.full_screen,]}> */}

                {/* <Card style={[globalStyle.full_screen,]} >
                    <Card.Content> */}
                <View style={[globalStyle.full_screen]}>
                    <LineChart style={[globalStyle.full_screen]}
                        data={{
                            dataSets: [{
                                label: "demo",
                                values: [
                                    { x: 5, y: 90 },
                                    { x: 10, y: 130 },
                                    { x: 50, y: 2000, marker: "eat more" },
                                    { x: 80, y: 9000, marker: "eat less" }
                                ]
                            }]
                        }}
                    />
                </View>

                {/* </Card.Content>
                </Card> */}


                {/* </View> */}
                {/* </ScrollView> */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        flex: 1
    }
});