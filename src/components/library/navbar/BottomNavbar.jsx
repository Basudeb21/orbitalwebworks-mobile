import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors, Images, NavigationStrings } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientIcon } from '../icon';

import {
    HomeScreen,
    LeadsScreen,
    FollowupScreen,
    DealsScreen,
    ProfileScreen,
} from '../../../screens/types/sales/screen';

const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
    const insets = useSafeAreaInsets();
    const iconSize = 25;

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: Colors.WHITE,
                    height: 55 + insets.bottom,
                    paddingBottom: insets.bottom,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: 'absolute',
                    elevation: 10,
                },
            }}
        >
            {/* HOME */}
            <Tab.Screen
                name={NavigationStrings.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <GradientIcon
                                name="home"
                                size={iconSize}
                                IconPack={Ionicons}
                                colors={[Colors.THEME_LIGHT_PINK, Colors.THEME_PURPLE]}
                            />
                        ) : (
                            <Ionicons
                                name="home-outline"
                                size={iconSize}
                                color={Colors.GRAY}
                            />
                        ),
                }}
            />

            {/* LEADS */}
            <Tab.Screen
                name={NavigationStrings.LEADS_SCREEN}
                component={LeadsScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <GradientIcon
                                name="account-group"
                                size={iconSize}
                                IconPack={MaterialCommunityIcons}
                                colors={[Colors.THEME_LIGHT_PINK, Colors.THEME_PURPLE]}
                            />
                        ) : (
                            <MaterialCommunityIcons
                                name="account-group-outline"
                                size={iconSize}
                                color={Colors.GRAY}
                            />
                        ),
                }}
            />

            {/* FOLLOW UPS */}
            <Tab.Screen
                name={NavigationStrings.FOLLOWUPS_SCREEN}
                component={FollowupScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <GradientIcon
                                name="alarm"
                                size={iconSize}
                                IconPack={Ionicons}
                                colors={[Colors.THEME_LIGHT_PINK, Colors.THEME_PURPLE]}
                            />
                        ) : (
                            <Ionicons
                                name="alarm-outline"
                                size={iconSize}
                                color={Colors.GRAY}
                            />
                        ),
                }}
            />

            {/* DEALS */}
            <Tab.Screen
                name={NavigationStrings.DEALS_SCREEN}
                component={DealsScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <GradientIcon
                                name="briefcase-check"
                                size={iconSize}
                                IconPack={MaterialCommunityIcons}
                                colors={[Colors.THEME_LIGHT_PINK, Colors.THEME_PURPLE]}
                            />
                        ) : (
                            <MaterialCommunityIcons
                                name="briefcase-check-outline"
                                size={iconSize}
                                color={Colors.GRAY}
                            />
                        ),
                }}
            />

            <Tab.Screen
                name={NavigationStrings.PROFILE_SCREEN}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Images.SALES_LOGO}
                            style={{
                                width: moderateScale(30),
                                height: verticalScale(25),
                                borderRadius: scale(100),
                                borderWidth: focused ? scale(2) : scale(0),
                                borderColor: Colors.THEME_LIGHT_PINK
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavbar;



const styles = StyleSheet.create({
    tab: {

    },
    navBar: {
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    active: {
        width: moderateScale(30),
        height: verticalScale(24),
        borderRadius: scale(100),
        borderWidth: scale(2),
        borderColor: Colors.THEME
    }
})