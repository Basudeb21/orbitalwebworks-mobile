import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from '../../../../styles'
import { BackPressTopBar } from '../../../../components/library/navbar'

const NotesScreen = () => {
    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <BackPressTopBar title={"Notes"} />

            <View style={screenStyles.container}>
                <Text>AttendanceScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default NotesScreen

const styles = StyleSheet.create({})