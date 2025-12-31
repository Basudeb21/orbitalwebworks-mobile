import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images, NavigationStrings } from '../../../constants'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { GradientTextButton } from '../button'
import { GradientIcon } from '../icon'

const ProfileCard = () => {
    const navigation = useNavigation();

    // const onPressViewProfile = () => {
    //     navigation.navigate(NavigationStrings.HOME_STACK, {
    //         screen: NavigationStrings.HOME_FRIEND_PROFILE_PAGE,
    //         params: { user }
    //     });
    // };
    return (
        <View style={styles.card}>
            <View style={styles.rowOne}>
                <View>
                    <TouchableOpacity style={styles.userImgContainer}>
                        <Image source={Images.SALES_LOGO} style={styles.userImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.topRow}>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userName}>{"Basudeb"}</Text>
                        <Text style={styles.userID}>@{"Basudeb21"}</Text>

                    </View>
                    <GradientTextButton label='View Profile' fontSize={10} width='40%' height={20} />

                </View>
            </View>
            <View style={styles.rowTwo}>
                <View style={styles.counterContainer}>
                    <Text style={styles.counter}>{"50"}</Text>
                    <Text style={styles.counterName}>Total</Text>
                </View>
                <View style={styles.counterContainer}>
                    <Text style={styles.counter}>{"30k"}</Text>
                    <Text style={styles.counterName}>Target</Text>
                </View>
                <View style={styles.counterContainer}>
                    <Text style={styles.counter}>{"80k"}</Text>
                    <Text style={styles.counterName}>Achieved</Text>
                </View>

            </View>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: Colors.WHITE,
        borderRadius: scale(15),
        elevation: scale(5),
        position: "absolute",
        top: 100
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rowOne: {
        flexDirection: "row"
    },
    rowTwo: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        marginBottom: verticalScale(12)

    },
    userImgContainer: {
        marginVertical: verticalScale(10),
        borderRadius: scale(100),
        height: verticalScale(48),
        width: moderateScale(48),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginStart: moderateScale(30)
    },

    userImg: {
        width: moderateScale(50),
        height: verticalScale(40),
        borderRadius: scale(100),
    },
    userNameContainer: {
        marginStart: moderateScale(15),
        alignSelf: "center"
    },
    userName: {
        fontSize: scale(16),
        fontWeight: "400",
    },
    userID: {
        fontSize: scale(10),
        color: Colors.PLACEHOLDER
    },
    counterContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    counter: {
        fontSize: scale(13),
        fontWeight: "500",
        alignSelf: "center"
    },
    counterName: {
        fontSize: scale(10),
        fontWeight: "400",
        alignSelf: "center"
    }

})