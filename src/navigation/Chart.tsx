import React from 'react';
import {
    SafeAreaView, View, Image, TouchableOpacity, StatusBar, StyleSheet,
    ScrollView
} from 'react-native';
import { Card, Text } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";
import PieChart from 'react-native-pie-chart';
import globalStyle from '../../global/global-style';
import { Colors } from '../../global/colors';
import { Sizes } from '../../global/size';

export default class ChartPage extends React.Component {

    render() {
        const widthAndHeight = 250
        const series = [123, 321, 123, 789, 537]
        const sliceColor = [Colors.red, Colors.gray, Colors.green, Colors.black, Colors.orange]

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

                <ScrollView style={[globalStyle.full_screen]} >
                    <View style={globalStyle.full_center}>
                        <Card style={[globalStyle.full_screen,]} >
                            <Card.Content>
                                <Text style={styles.title}>Basic</Text>
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={series}
                                    sliceColor={sliceColor}
                                />
                            </Card.Content>
                        </Card>
                        <Card style={[globalStyle.full_screen, globalStyle.margin_top]} >
                            <Card.Content>
                                <Text style={styles.title}>Doughnut</Text>
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={series}
                                    sliceColor={sliceColor}
                                    doughnut={true}
                                    coverRadius={0.45}
                                    coverFill={'#FFF'}
                                />
                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: RFValue(Sizes.large_font_size, 580),
        margin: Sizes.margin,
    }
});