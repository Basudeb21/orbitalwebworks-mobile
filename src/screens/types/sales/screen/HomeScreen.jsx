import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from '../../../../styles'
import { HomeTopBar } from '../../../../components/library/navbar'

const HomeScreen = () => {
    console.log("Home screen loaded");

    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <View style={screenStyles.container}>
                <HomeTopBar />
                <Text>HomeScreen</Text>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})