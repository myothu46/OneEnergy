import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import globalStyle from '../../global/global-style';
import { Sizes } from '../../global/size';

export default class NotificationPage extends React.Component {

    render() {
        return (
            <SafeAreaView style={globalStyle.full_screen}>
                <StatusBar animated={true} hidden={false} />

                <ScrollView>
                    <View>
                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Appliance Fault
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Water Heaters showing high energy load than usual
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Warning:
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Your energy use increased significantly this month than last month
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Fault
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Air Con is showing heavy load than usual
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Fault
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Air Con is showing heavy load than usual
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Warning:
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Appliance ABC is not working
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Warning:
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Appliance ABC is not working
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Warning:
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Appliance ABC is not working
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={[globalStyle.margin]}>
                            <Card.Content>
                                <View style={[globalStyle.full_screen, globalStyle.right]}>
                                    <Text style={[globalStyle.black, styles.card_time]}>today, 15:34:34</Text>
                                </View>
                                <Text style={[globalStyle.red, styles.card_title]}>
                                    Warning:
                                </Text>
                                <Text style={[globalStyle.black, styles.card_description]}>
                                    Appliance ABC is not working
                                </Text>
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
        fontSize: Sizes.small_font_size,
        fontWeight: '400'
    },
    card_time: {
        fontSize: Sizes.small_font_size,
        fontWeight: '200'
    },
})