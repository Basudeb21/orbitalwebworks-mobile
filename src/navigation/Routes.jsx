import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashStack from './SplashStack';
import MainStack from './MainStack';


const Routes = ({ isLoggedIn }) => {
    return (
        <NavigationContainer>
            <SplashStack />
        </NavigationContainer>
    );
};

export default Routes;