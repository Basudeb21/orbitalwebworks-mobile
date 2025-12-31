import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'

import { screenStyles } from '../../../../styles'
import { NavigationStrings } from '../../../../constants'
import { ProfileTopBar } from '../../../../components/library/navbar'
import { ProfileCard } from '../../../../components/library/card'
import { OutLineButton, ProfileMenuButton } from '../../../../components/library/button'

const ProfileScreen = () => {
    const navigation = useNavigation();

    const menuData = [
        {
            id: 1,
            icon: MaterialCommunityIcons,
            iconName: 'calendar-check',
            text: 'Attendance',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.ATTENDANCE_SCREEN
            }),
        },
        {
            id: 2,
            icon: MaterialCommunityIcons,
            iconName: 'clipboard-text',
            text: 'Work Report',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.WORK_REPORT_SCREEN
            }),
        },
        {
            id: 3,
            icon: FontAwesome5,
            iconName: 'wallet',
            text: 'Salary / Payments',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.SALARY_SCREEN
            }),
        },
        {
            id: 4,
            icon: AntDesign,
            iconName: 'Trophy',
            text: 'Leaderboard',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.LEADERBOARD_SCREEN
            }),
        },
        {
            id: 5,
            icon: MaterialCommunityIcons,
            iconName: 'cash-multiple',
            text: 'Commission History',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.COMMISSION_HISTORY_SCREEN
            }),
        },
        {
            id: 6,
            icon: MaterialCommunityIcons,
            iconName: 'chart-line',
            text: 'Price Chart',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.PRICE_CHART_SCREEN
            }),
        },
        {
            id: 7,
            icon: Ionicons,
            iconName: 'settings-outline',
            text: 'Settings',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.SETTINGS_SCREEN
            }),
        },
        {
            id: 8,
            icon: Foundation,
            iconName: 'clipboard-notes',
            text: 'Notes',
            onPress: () => navigation.navigate(NavigationStrings.PROFILE_STACK, {
                screen: NavigationStrings.NOTES_SCREEN
            }),
        },
    ];

    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <View style={screenStyles.container}>
                <ProfileTopBar />
                <ProfileCard />

                <FlatList
                    data={menuData}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    renderItem={({ item }) => (
                        <ProfileMenuButton
                            Icon={item.icon}
                            iconName={item.iconName}
                            text={item.text}
                            onPress={item.onPress}
                        />
                    )}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <View style={styles.footer}>
                            <OutLineButton
                                label="Logout"
                                width="100%"
                                onPress={() => console.log('Logout')}
                            />
                        </View>
                    }
                />

            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: verticalScale(30),
        marginTop: verticalScale(80),
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        marginBottom: verticalScale(14),
        gap: moderateScale(14),
    },
    footer: {
        paddingHorizontal: moderateScale(16),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(30),
    },
})

