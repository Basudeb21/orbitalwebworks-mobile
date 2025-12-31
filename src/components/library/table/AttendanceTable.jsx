// AttendanceTable.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from './../../../constants'
import { EmptyList, Spacer } from '../boots';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const STATUS_STYLE = {
    PRESENT: { bg: '#E6F9F0', color: '#16A34A' },
    ABSENT: { bg: '#FEE2E2', color: '#DC2626' },
    LEAVE: { bg: '#E0F2FE', color: '#0284C7' },
    WEEKOFF: { bg: '#F3F4F6', color: '#6B7280' },
    HOLIDAY: { bg: '#F3E8FF', color: '#7C3AED' },
    HALF: { bg: '#FEF3C7', color: '#D97706' },
};

const AttendanceTable = ({ data = [] }) => {
    const renderItem = ({ item, index }) => {
        const striped = index % 2 === 0;

        return (
            <View
                style={[
                    styles.row,
                    { backgroundColor: striped ? '#FAFAFA' : '#FFFFFF' },
                ]}
            >
                <View style={styles.colIndex}>
                    <Text style={styles.cell}>{index + 1}</Text>
                </View>

                <View style={styles.colDay}>
                    <Text style={styles.cell}>{item.day}</Text>
                </View>

                <View style={styles.colDate}>
                    <Text style={styles.cell}>{item.date}</Text>
                </View>

                <View style={styles.colTime}>
                    <Text style={styles.cell}>{item.workingTime || '—'}</Text>
                </View>

                <View style={styles.colStatus}>
                    <View
                        style={[
                            styles.statusBadge,
                            { backgroundColor: STATUS_STYLE[item.status]?.bg },
                        ]}
                    >
                        <Text
                            style={[
                                styles.statusText,
                                { color: STATUS_STYLE[item.status]?.color },
                            ]}
                        >
                            {item.status}
                        </Text>
                    </View>
                </View>
            </View>

        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.colIndex}>
                    <Text style={styles.headerText}>#</Text>
                </View>

                <View style={styles.colDay}>
                    <Text style={styles.headerText}>Day</Text>
                </View>

                <View style={styles.colDate}>
                    <Text style={styles.headerText}>Date</Text>
                </View>

                <View style={styles.colTime}>
                    <Text style={styles.headerText}>Time</Text>
                </View>

                <View style={styles.colStatus}>
                    <Text style={styles.headerText}>Status</Text>
                </View>
            </View>


            {/* Body */}
            <FlatList
                data={data}
                keyExtractor={(_, i) => i.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <EmptyList
                        Icon={MaterialCommunityIcons}
                        iconName="calendar-remove"
                        title="No Attendance Records"
                        description="Your attendance data will appear here once available"
                    />
                }
                ListFooterComponent={
                    <Spacer height={40} />
                }
            />
        </View>
    );
};

export default AttendanceTable;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderColor: '#E5E7EB', // light gray border
    },

    /* HEADER */
    header: {
        flexDirection: 'row',
        backgroundColor: Colors.THEME_PURPLE,
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(8),
        borderBottomWidth: 1,
        borderColor: '#D1D5DB',
    },
    headerText: {
        color: Colors.WHITE,
        fontSize: scale(12),
        fontWeight: '600',
    },

    /* ROW */
    row: {
        flexDirection: 'row',
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(8),
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#E5E7EB',
    },

    cell: {
        fontSize: scale(12),
        color: '#111827',
    },

    /* COLUMN WIDTHS */
    colIndex: {
        width: '8%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    colDay: {
        width: '18%',
        justifyContent: 'flex-start',
    },
    colDate: {
        width: '22%',
        justifyContent: 'flex-start',
    },
    colTime: {
        width: '22%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colStatus: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    /* STATUS */
    statusBadge: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(3),
        borderRadius: scale(10), // small pill is OK
    },
    statusText: {
        fontSize: scale(10),
        fontWeight: '600',
    },
});
