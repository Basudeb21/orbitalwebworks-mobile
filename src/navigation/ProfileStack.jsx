import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import { ForgotPassword, LoginScreen } from './../screens/common/auth';
import { AttendanceScreen, CommissionHistoryScreen, LeaderboardScreen, NotesScreen, PriceChatScreen, SalaryScreen, SettingsScreen, WorkReportScreen } from './../screens/types/sales/profile'

const ProfileStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.ATTENDANCE_SCREEN} component={AttendanceScreen} />
            <Stack.Screen name={NavigationStrings.WORK_REPORT_SCREEN} component={WorkReportScreen} />
            <Stack.Screen name={NavigationStrings.SALARY_SCREEN} component={SalaryScreen} />
            <Stack.Screen name={NavigationStrings.LEADERBOARD_SCREEN} component={LeaderboardScreen} />
            <Stack.Screen name={NavigationStrings.COMMISSION_HISTORY_SCREEN} component={CommissionHistoryScreen} />
            <Stack.Screen name={NavigationStrings.SETTINGS_SCREEN} component={SettingsScreen} />
            <Stack.Screen name={NavigationStrings.PRICE_CHART_SCREEN} component={PriceChatScreen} />
            <Stack.Screen name={NavigationStrings.NOTES_SCREEN} component={NotesScreen} />

        </Stack.Navigator>
    );
}

export default ProfileStack