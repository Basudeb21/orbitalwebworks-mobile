import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';

const EmptyList = ({
    Icon,
    iconName,
    title = 'No Data Found',
    description = 'There is nothing to show here',
    iconSize = 48,
}) => {
    return (
        <View style={styles.container}>
            {Icon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={Colors.GRAY}
                    style={styles.icon}
                />
            )}

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

export default EmptyList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(24),
        paddingVertical: verticalScale(40),
    },
    icon: {
        marginBottom: verticalScale(12),
        opacity: 0.8,
    },
    title: {
        fontSize: scale(16),
        fontWeight: '600',
        color: Colors.BLACK,
        marginBottom: verticalScale(6),
        textAlign: 'center',
    },
    description: {
        fontSize: scale(13),
        color: Colors.GRAY,
        textAlign: 'center',
        lineHeight: scale(18),
    },
});
