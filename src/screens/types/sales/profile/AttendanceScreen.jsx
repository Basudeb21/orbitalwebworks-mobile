import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from '../../../../styles'
import { BackPressTopBar } from '../../../../components/library/navbar'
import { AttendanceTable } from './../../../../components/library/table'
const attendanceData = [
    { day: 'Sun', date: '01 Dec', workingTime: '—', status: 'WEEKOFF' },
    { day: 'Mon', date: '02 Dec', workingTime: '8h 20m', status: 'PRESENT' },
    { day: 'Tue', date: '03 Dec', workingTime: '8h 10m', status: 'PRESENT' },
    { day: 'Wed', date: '04 Dec', workingTime: '7h 45m', status: 'PRESENT' },
    { day: 'Thu', date: '05 Dec', workingTime: '—', status: 'LEAVE' },
    { day: 'Fri', date: '06 Dec', workingTime: '8h 30m', status: 'PRESENT' },
    { day: 'Sat', date: '07 Dec', workingTime: '5h 00m', status: 'HALF' },

    { day: 'Sun', date: '08 Dec', workingTime: '—', status: 'WEEKOFF' },
    { day: 'Mon', date: '09 Dec', workingTime: '8h 25m', status: 'PRESENT' },
    { day: 'Tue', date: '10 Dec', workingTime: '8h 00m', status: 'PRESENT' },
    { day: 'Wed', date: '11 Dec', workingTime: '—', status: 'ABSENT' },
    { day: 'Thu', date: '12 Dec', workingTime: '7h 50m', status: 'PRESENT' },
    { day: 'Fri', date: '13 Dec', workingTime: '8h 40m', status: 'PRESENT' },
    { day: 'Sat', date: '14 Dec', workingTime: '—', status: 'HOLIDAY' },

    { day: 'Sun', date: '15 Dec', workingTime: '—', status: 'WEEKOFF' },
    { day: 'Mon', date: '16 Dec', workingTime: '8h 10m', status: 'PRESENT' },
    { day: 'Tue', date: '17 Dec', workingTime: '8h 05m', status: 'PRESENT' },
    { day: 'Wed', date: '18 Dec', workingTime: '4h 30m', status: 'HALF' },
    { day: 'Thu', date: '19 Dec', workingTime: '—', status: 'LEAVE' },
    { day: 'Fri', date: '20 Dec', workingTime: '8h 15m', status: 'PRESENT' },
    { day: 'Sat', date: '21 Dec', workingTime: '—', status: 'HOLIDAY' },

    { day: 'Sun', date: '22 Dec', workingTime: '—', status: 'WEEKOFF' },
    { day: 'Mon', date: '23 Dec', workingTime: '8h 30m', status: 'PRESENT' },
    { day: 'Tue', date: '24 Dec', workingTime: '8h 00m', status: 'PRESENT' },
    { day: 'Wed', date: '25 Dec', workingTime: '—', status: 'HOLIDAY' },
    { day: 'Thu', date: '26 Dec', workingTime: '7h 55m', status: 'PRESENT' },
    { day: 'Fri', date: '27 Dec', workingTime: '—', status: 'ABSENT' },
    { day: 'Sat', date: '28 Dec', workingTime: '5h 20m', status: 'HALF' },

    { day: 'Sun', date: '29 Dec', workingTime: '—', status: 'WEEKOFF' },
    { day: 'Mon', date: '30 Dec', workingTime: '8h 35m', status: 'PRESENT' },
    { day: 'Tue', date: '31 Dec', workingTime: '6h 00m', status: 'HALF' },
];

const blankAttendance = []


const AttendanceScreen = () => {
    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <BackPressTopBar title={"Attendance"} />
            <View style={screenStyles.container}>
                <AttendanceTable data={attendanceData} />
            </View>
        </SafeAreaView>
    )
}

export default AttendanceScreen

const styles = StyleSheet.create({})