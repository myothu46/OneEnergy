import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../global/colors';
import HomePage from './HomePage';
import AppliancesPage from './Appliances';
import ChartPage from './Chart';
import SettingPage from './Setting';
import { Sizes } from '../../global/size';

const Tab = createMaterialBottomTabNavigator();

function TabsPage() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={Colors.red}>

            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <MaterialCommunityIcons name="home" color={color} size={Sizes.logo_font_size} />
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Appliances"
                component={AppliancesPage}
                options={{
                    headerShown: false,
                    title: 'Appliances',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <MaterialCommunityIcons name="power-plug" color={color} size={Sizes.logo_font_size} />
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Chart"
                component={ChartPage}
                options={{
                    headerShown: false,
                    title: 'Charts',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <MaterialCommunityIcons name="chart-bar" color={color} size={Sizes.logo_font_size} />
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Setting"
                component={SettingPage}
                options={{
                    headerShown: false,
                    title: 'Setting',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={Sizes.logo_font_size} />
                        );
                    },
                }}
            />

        </ Tab.Navigator>
    );
}

export default TabsPage