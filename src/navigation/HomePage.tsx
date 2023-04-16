import React from 'react';
import {
    SafeAreaView, View, Image, TouchableOpacity, StatusBar,
    ScrollView, StyleSheet,
} from 'react-native';
import { Card, Text } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import globalStyle from '../../global/global-style';
import { Colors } from '../../global/colors';
import { Sizes } from '../../global/size';

export default class HomePage extends React.Component {

    state = {
        date: new Date(),
        showPicker: false
    }

    handleConfirm(date) {
        this.setState({ date: date })
        this.setState({ showPicker: false })
    };

    notification() {
        this.props.navigation.navigate('notification')
    }

    render() {
        return (
            <SafeAreaView style={globalStyle.full_screen} >
                <StatusBar animated={true} hidden={false} />

                <View style={[globalStyle.horizontal]}>
                    <View style={[globalStyle.right, globalStyle.toolbar_icon_style]}></View>
                    <View style={[globalStyle.full_center]}>
                        <View style={[globalStyle.horizontal]}>
                            <Text style={[globalStyle.gray, globalStyle.header]}>ONE</Text>
                            <Text style={[globalStyle.red, globalStyle.header]}>NERGY</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={[globalStyle.right]}
                        onPress={() => this.notification()}>
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
                        <Card style={[globalStyle.margin]} onPress={() => this.setState({ showPicker: true })}>
                            <Card.Content>
                                <View style={[globalStyle.horizontal]}>
                                    <MaterialCommunityIcons name="calendar-month" size={Sizes.logo_font_size} />
                                    <View style={[globalStyle.full_screen, globalStyle.center_horizontal]}>
                                        <View>
                                            <Text style={[styles.date_style]}>Select Date</Text>
                                            <Text style={[globalStyle.red, styles.date_style]}>Today</Text>
                                        </View>
                                    </View>
                                    <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={Sizes.logo_font_size} style={[globalStyle.right]} />
                                </View>

                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.horizontal]}>
                                    <View style={styles.appliance_style}>
                                        <Text style={[globalStyle.white, styles.appliance_text]}>APPLIANCES</Text>
                                        <View style={[styles.label_style]}>
                                            <Text style={[globalStyle.white, styles.label_text_style]}>65.62%</Text>
                                            <Text style={[globalStyle.white, styles.label_text_style]}>Air Con</Text>
                                        </View>
                                    </View>
                                    <View style={styles.other_style}>
                                        <View>
                                            <View style={styles.water_heater1_style}>
                                                <View style={[styles.label_style]}>
                                                    <Text style={[globalStyle.white, styles.label_text_style]}>17.9%</Text>
                                                    <Text style={[globalStyle.white, styles.label_text_style]}>Water Heater</Text>
                                                </View>
                                            </View>
                                            <View style={styles.water_heater2_style}>
                                                <View style={[styles.label_style]}>
                                                    <Text style={[globalStyle.white, styles.label_text_style]}>11.3%</Text>
                                                    <Text style={[globalStyle.white, styles.label_text_style]}>Water Heater</Text>
                                                </View>
                                            </View>
                                            <View style={styles.water_heater3_style}>
                                                <View style={[styles.label_style]}>
                                                    <Text style={[globalStyle.black, styles.label_text_style]}>5.2%</Text>
                                                    <Text style={[globalStyle.black, styles.label_text_style]}>Water Heater</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <Text style={[styles.card_title]}>Your consumption data</Text>
                                <View style={[globalStyle.full_screen, globalStyle.horizontal, globalStyle.margin_top]}>
                                    <View style={[styles.consumption]}>
                                        <TouchableOpacity style={[globalStyle.full_screen, globalStyle.horizontal]}>
                                            <View style={[globalStyle.horizontal, globalStyle.background_red, , styles.button_style]}>
                                                <MaterialCommunityIcons name="lightning-bolt" size={Sizes.logo_font_size} />
                                                <Text style={[globalStyle.white, styles.card_description]}> 8.35 kWh</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[globalStyle.full_center, globalStyle.right, styles.consumption]}>
                                        <Text style={[globalStyle.gray, styles.card_description]}>$ 2.61 SGD </Text>
                                    </View>
                                </View>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <Text style={[styles.card_title]}>Comparsion to the similar Condominium household in NEA study</Text>
                                <View style={[globalStyle.full_screen, globalStyle.horizontal]}>
                                    <Text style={[globalStyle.red, styles.card_description]}>Difference : -20.63 %</Text>
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
        fontSize: Sizes.normal_font_size,
        fontWeight: '400'
    },
    card_description: {
        fontSize: Sizes.normal_font_size,
        fontWeight: '300'
    },
    date_style: {
        fontSize: Sizes.normal_font_size,
        textAlign: 'center'
    },
    appliance_style: {
        height: RFValue(250, 580),
        flex: 1,
        backgroundColor: Colors.red
    },
    appliance_text: {
        fontSize: Sizes.small_font_size,
        margin: RFValue(Sizes.margin, 580),
        fontWeight: 'bold'
    },
    other_style: {
        flex: 1,
    },
    water_heater1_style: {
        flex: 1,
        backgroundColor: Colors.gray,
        height: RFValue(125, 580)
    },
    water_heater2_style: {
        flex: 1,
        backgroundColor: Colors.black,
        height: RFValue(85, 580)
    },
    water_heater3_style: {
        flex: 1,
        backgroundColor: Colors.light_gray,
        height: RFValue(40, 580)
    },
    label_style: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    label_text_style: {
        fontSize: Sizes.small_font_size,
        marginLeft: RFValue(Sizes.margin, 580)
    },
    consumption: {
        flex: 1
    },
    button_style: {
        borderWidth: 0,
        alignItems: 'center',
        height: RFValue(Sizes.button_height, 580),
        borderRadius: Sizes.input_border_radius,
        padding: Sizes.margin,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },

})