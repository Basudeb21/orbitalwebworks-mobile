// PriceChartTable.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';
import { EmptyList } from '../boots';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PriceChartTable = ({ data = [] }) => {
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

                <View style={styles.colName}>
                    <Text style={styles.cell}>{item.name || '—'}</Text>
                </View>

                <View style={styles.colPrice}>
                    <Text style={styles.cell}>{item.basePrice || '—'}</Text>
                </View>

                <View style={styles.colService}>
                    {item.freeServices?.length ? (
                        item.freeServices.map((service, idx) => (
                            <Text key={idx} style={styles.serviceText}>
                                {service}
                            </Text>
                        ))
                    ) : (
                        <Text style={styles.serviceText}>—</Text>
                    )}
                </View>

                <View style={styles.colDuration}>
                    <Text style={styles.cell}>{item.duration || '—'}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.colIndex}>
                    <Text style={styles.headerText}>#</Text>
                </View>

                <View style={styles.colName}>
                    <Text style={styles.headerText}>Name</Text>
                </View>

                <View style={styles.colPrice}>
                    <Text style={styles.headerText}>Price</Text>
                </View>

                <View style={styles.colService}>
                    <Text style={styles.headerText}>Free Services</Text>
                </View>

                <View style={styles.colDuration}>
                    <Text style={styles.headerText}>Duration</Text>
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
                        Icon={AntDesign}
                        iconName="inbox"
                        title="No price plans available"
                        description="Currently there are no plans added. Please check back later."
                    />
                }
            />
        </View>
    );
};

export default PriceChartTable;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
    },

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

    serviceText: {
        fontSize: scale(11),
        color: '#374151',
        lineHeight: scale(16),
    },

    colIndex: {
        width: '6%',
        alignItems: 'center',
    },
    colName: {
        width: '22%',
    },
    colPrice: {
        width: '16%',
        alignItems: 'center',
    },
    colService: {
        width: '36%',
    },
    colDuration: {
        width: '20%',
        alignItems: 'center',
    },
});
