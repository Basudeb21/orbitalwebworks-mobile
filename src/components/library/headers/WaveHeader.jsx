import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const WaveHeader = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.gradient} />

        </View>
    );
};

export default WaveHeader;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    gradient: {
        height: 220,
        backgroundColor: '#ff5f9e',
    },
    wave: {
        marginTop: -1,
    },
});