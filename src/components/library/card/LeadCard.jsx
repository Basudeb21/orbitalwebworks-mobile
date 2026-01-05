import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../constants';

const statusColorMap = {
    NEW: '#3B82F6',
    CONTACTED: '#6366F1',
    FOLLOW_UP: '#F59E0B',
    CONVERTED: '#10B981',
};

const priorityColorMap = {
    HOT: '#EF4444',
    WARM: '#F59E0B',
    COLD: '#3B82F6',
};

const LeadCard = ({
    name,
    phone,
    source,
    status = 'NEW',
    priority = 'COLD',
    assignedTo,
    lastFollowUp,
    onPress,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.card}
            onPress={onPress}
        >
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>

                <View
                    style={[
                        styles.statusBadge,
                        { backgroundColor: statusColorMap[status] || Colors.GRAY },
                    ]}
                >
                    <Text style={styles.badgeText}>{status.replace('_', ' ')}</Text>
                </View>
            </View>

            {/* Contact */}
            <Text style={styles.subText}>{phone}</Text>

            {/* Info Row */}
            <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                    <Ionicons name="link-outline" size={14} color={Colors.GRAY} />
                    <Text style={styles.infoText}>{source}</Text>
                </View>

                <View
                    style={[
                        styles.priorityBadge,
                        { borderColor: priorityColorMap[priority] },
                    ]}
                >
                    <Text
                        style={[
                            styles.priorityText,
                            { color: priorityColorMap[priority] },
                        ]}
                    >
                        {priority}
                    </Text>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Assigned: {assignedTo || '—'}
                </Text>
                <Text style={styles.footerText}>
                    Follow-up: {lastFollowUp || '—'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default LeadCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        padding: moderateScale(14),
        borderRadius: scale(12),
        marginBottom: verticalScale(10),
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(6),
    },

    name: {
        fontSize: scale(15),
        fontWeight: '600',
        color: Colors.BLACK,
        flex: 1,
        marginRight: scale(10),
    },

    statusBadge: {
        paddingHorizontal: scale(10),
        paddingVertical: scale(4),
        borderRadius: scale(20),
    },

    badgeText: {
        fontSize: scale(10),
        color: Colors.WHITE,
        fontWeight: '600',
    },

    subText: {
        fontSize: scale(12),
        color: Colors.GRAY,
        marginBottom: verticalScale(8),
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(8),
    },

    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(6),
    },

    infoText: {
        fontSize: scale(11),
        color: Colors.GRAY,
    },

    priorityBadge: {
        paddingHorizontal: scale(10),
        paddingVertical: scale(3),
        borderRadius: scale(20),
        borderWidth: 1,
    },

    priorityText: {
        fontSize: scale(10),
        fontWeight: '600',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    footerText: {
        fontSize: scale(11),
        color: '#6B7280',
    },
});

