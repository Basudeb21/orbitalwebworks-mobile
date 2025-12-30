import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';

const LoadingBar = () => {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 100,
            duration: 5000,
            useNativeDriver: false,
        }).start();
    }, []);

    const widthInterpolated = progress.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.container}>
            <View style={styles.loadingBar}>
                <Animated.View
                    style={[styles.completeLoadingBar, { width: widthInterpolated }]}
                />
            </View>
            <Text style={styles.loadingTxt}>Loading....</Text>
        </View>
    );
};

export default LoadingBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    loadingBar: {
        width: '100%',
        height: verticalScale(6),
        backgroundColor: Colors.WHITE,
        borderRadius: 100,
        overflow: 'hidden',
    },
    completeLoadingBar: {
        height: '100%',
        backgroundColor: Colors.THEME_LIGHT_PINK,
        borderRadius: 100,
    },
    loadingTxt: {
        marginTop: verticalScale(8),
        fontSize: scale(14),
        fontWeight: '600',
        color: Colors.WHITE,
    },
});
