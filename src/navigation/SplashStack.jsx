import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import { InformationScreen, SplashScreen } from '../screens/common/splash';
import AuthStack from './AuthStack';


const SplashStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={NavigationStrings.INFORMATION_SCREEN} component={InformationScreen} />
            <Stack.Screen name={NavigationStrings.AUTH_STACK} component={AuthStack} />

        </Stack.Navigator>
    );
}

export default SplashStack