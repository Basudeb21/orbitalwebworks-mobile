import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'

const Link = ({
    label,
    color,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.txt, { color: color }]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    txt: {
        color: Colors.THEME,
        textDecorationLine: "underline",
    }
})