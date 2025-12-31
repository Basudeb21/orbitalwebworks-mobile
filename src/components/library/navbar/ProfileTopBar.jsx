import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, ImageBackground } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '../../../constants';
import { AnimatedText } from '../text';

const ProfileTopBar = ({ title }) => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.goBack();
    };


    return (
        <ImageBackground
            source={{ uri: Images.COVER }}
            style={styles.container}
            imageStyle={styles.image}
        >

            <View style={styles.row}>
                <TouchableOpacity onPress={handleBackPress} style={styles.icon}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={28}
                        color={Colors.BLACK}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>{"Hii, Basudeb"}</Text>
                    <AnimatedText textStyle={styles.wish} text={"Good Morning"} />
                </View>
            </View>
        </ImageBackground>
    );
};

export default ProfileTopBar;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : verticalScale(40),
        height: verticalScale(130),
        backgroundColor: Colors.THEME_PURPLE,
        justifyContent: 'center',
        paddingHorizontal: moderateScale(16),
    },
    image: {
        backgroundColor: Colors.THEME_PURPLE,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        position: "absolute",
        top: 20,
        left: 15
    },
    icon: {
        marginRight: moderateScale(10),
    },
    title: {
        color: Colors.BLACK,
        fontSize: scale(20),
        fontWeight: '400',
    },
    wish: {
        fontWeight: "600",
        fontSize: scale(14)
    }
});