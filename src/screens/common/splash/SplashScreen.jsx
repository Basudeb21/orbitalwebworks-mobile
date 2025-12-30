import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Colors, Images, NavigationStrings } from '../../../constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LoadingBar } from "./../../../components/library/loading"
const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(NavigationStrings.AUTH_STACK);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.screen}>
            <Image
                source={Images.LOGO}
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.loadingContainer}>
                <LoadingBar />
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.BLACK,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: moderateScale(280),
        height: verticalScale(160),
    },
    loadingContainer: {
        position: 'absolute',
        bottom: verticalScale(60),
        width: '80%',
        alignItems: 'center',
    },
    loadingTxt: {
        marginTop: verticalScale(10),
        color: Colors.WHITE,
        fontSize: scale(16),
        fontWeight: '700',
        fontFamily: 'DMSans-Regular',
    },
});

