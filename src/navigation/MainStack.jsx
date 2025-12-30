import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';


const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name={NavigationStrings.SPLASH_SCREEN} component={LoadingScreen} /> */}
            {/* <Stack.Screen name={NavigationStrings.MAIN_STACK} component={MainStack} /> */}
        </Stack.Navigator>
    );
}

export default MainStack