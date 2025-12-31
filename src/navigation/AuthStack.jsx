import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import { ForgotPassword, LoginScreen } from './../screens/common/auth';
import MainStack from './MainStack';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={NavigationStrings.FORGOT_PASSWORD_SCREEN} component={ForgotPassword} />
            <Stack.Screen name={NavigationStrings.MAIN_STACK} component={MainStack} />
        </Stack.Navigator>
    );
}

export default AuthStack