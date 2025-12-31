import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import { Colors, Images } from '../../../constants';
import { Spacer } from '../boots';
import { GradientIcon } from '../icon';



const HomeTopBar = ({ notificationOnPress, searchOnPress, walletOnPress, cartOnPress }) => {
    const ICON_SIZE = 25;
    const ICON_SPACE = 12;
    const GRADIENT_ICON_COLORS = [Colors.THEME_LIGHT_PINK, Colors.THEME_PURPLE];
    return (
        <View style={styles.container}>
            <Image
                source={Images.LOGO}
                style={styles.logo}
                resizeMode='center'
            />
            <View style={styles.iconContainer}>
                <Spacer width={ICON_SPACE} />
                <TouchableOpacity onPress={notificationOnPress}>
                    <GradientIcon
                        name="notifications"
                        size={ICON_SIZE}
                        IconPack={Ionicons}
                        colors={GRADIENT_ICON_COLORS}
                    />
                </TouchableOpacity>
                <Spacer width={ICON_SPACE} />

                <TouchableOpacity onPress={walletOnPress}>
                    <GradientIcon
                        name="wallet"
                        size={ICON_SIZE}
                        IconPack={Entypo}
                        colors={GRADIENT_ICON_COLORS}
                    />
                </TouchableOpacity>
                <Spacer width={ICON_SPACE} />

                <TouchableOpacity onPress={cartOnPress}>
                    <Image
                        source={Images.SALES_LOGO}
                        style={styles.img}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeTopBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: verticalScale(65),
        minHeight: verticalScale(50),
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginEnd: verticalScale(8),
        justifyContent: "space-evenly"
    },
    logo: {
        width: moderateScale(55),
        height: verticalScale(45),
        marginLeft: (10)
    },
    img: {
        height: verticalScale(25),
        width: moderateScale(30),
        borderWidth: scale(2),
        borderColor: Colors.THEME_LIGHT_PINK,
        borderRadius: scale(100)
    }
})