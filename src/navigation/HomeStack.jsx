import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import { DashBoardScreen, HomeScreen } from './../screens/types/sales/screen'

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.DASHBOARD_SCREEN} component={DashBoardScreen} />
            <Stack.Screen name={NavigationStrings.HOME_SCREEN} component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;