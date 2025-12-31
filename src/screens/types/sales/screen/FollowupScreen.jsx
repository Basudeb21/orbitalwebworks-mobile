import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from '../../../../styles'

const FollowupScreen = () => {
    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <View style={screenStyles.container}>
                <Text>DashBoardScreen</Text>

            </View>
        </SafeAreaView>
    )
}

export default FollowupScreen

const styles = StyleSheet.create({})