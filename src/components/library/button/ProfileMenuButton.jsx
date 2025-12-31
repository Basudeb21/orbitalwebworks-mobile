import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { GradientIcon } from '../icon'

const ProfileMenuButton = ({ Icon, iconName, text, onPress }) => {
    const GRADIENT_COLORS = [Colors.THEME_LIGHT_PINK, Colors.THEME_PURPLE]

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <GradientIcon
                name={iconName}
                size={18}
                IconPack={Icon}
                colors={GRADIENT_COLORS}
            />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ProfileMenuButton

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        minWidth: "48%",
        maxWidth: "48%",
        paddingVertical: verticalScale(10),
        elevation: scale(10),
        borderRadius: scale(8),
        paddingStart: moderateScale(10),
        gap: scale(10)

    },
    text: {
        fontWeight: "600",
        fontSize: scale(12)
    }
})