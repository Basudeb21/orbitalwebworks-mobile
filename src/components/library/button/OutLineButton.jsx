import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';

const OutLineButton = ({ label, onPress, width }) => {
    return (
        <TouchableOpacity style={[styles.btn, { width: width || "100%" }]} onPress={onPress}>
            <Text style={[styles.btnTxt, { color: Colors.THEME_PURPLE }]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default OutLineButton

const styles = StyleSheet.create({
    btn: {
        borderWidth: scale(2),
        borderColor: Colors.THEME_PURPLE,
        paddingVertical: verticalScale(10),
        borderRadius: scale(6),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    btnTxt: {
        alignSelf: "center",
        fontWeight: "600",
        fontSize: scale(16)
    }
})