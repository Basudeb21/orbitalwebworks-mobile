import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from '../../../../styles'
import { BackPressTopBar } from '../../../../components/library/navbar'

const SettingsScreen = () => {
    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <BackPressTopBar title={"Settings"} />

            <View style={screenStyles.container}>
                <Text>AttendanceScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})