import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import { BottomNavbar } from './../components/library/navbar'
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';


const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={NavigationStrings.BOTTOM_NAVBAR}
                component={BottomNavbar}
            />
            <Stack.Screen
                name={NavigationStrings.HOME_STACK}
                component={HomeStack}
            />
            <Stack.Screen
                name={NavigationStrings.PROFILE_STACK}
                component={ProfileStack}
            />
        </Stack.Navigator>
    );
}

export default MainStack