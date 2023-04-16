import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from './colors';
import { Sizes } from '../global/size';

export default globalStyle = StyleSheet.create({
    full_screen: {
        flex: 1
    },
    full_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row'
    },
    center_horizontal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    full_width: {
        width: '100%'
    },
    right: {
        alignItems: 'flex-end'
    },
    white: {
        color: Colors.white
    },
    black: {
        color: Colors.black
    },
    gray: {
        color: Colors.gray
    },
    background_gray: {
        backgroundColor: Colors.gray,
        color: Colors.red
    },
    red: {
        color: Colors.red
    },
    background_red: {
        backgroundColor: Colors.red,
        color: Colors.white
    },
    logo: {
        fontSize: RFValue(Sizes.logo_font_size, 580),
        marginBottom: RFValue(Sizes.logo_bottom, 580)
    },
    icon_style: {
        padding: Sizes.margin,
        margin: Sizes.margin,
        height: RFValue(Sizes.toogle_image_size, 580),
        width: RFValue(Sizes.toogle_image_size, 580),
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    toolbar_icon_style: {
        padding: Sizes.margin,
        margin: Sizes.margin,
        height: RFValue(Sizes.large_font_size, 580),
        width: RFValue(Sizes.large_font_size, 580),
        resizeMode: 'stretch',
        alignItems: 'center'
    },
})