import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { OutlineInputBoxWithIcon } from './../../../components/library/input';
import { AnimatedText } from './../../../components/library/text';
import { Colors, Images } from '../../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { screenStyles, authStyles } from './../../../styles';
import { scale, verticalScale } from 'react-native-size-matters';
import { GradientTextButton } from './../../../components/library/button';
import { Link, Spacer } from './../../../components/library/boots';
const LoginScreen = () => {
    return (
        <SafeAreaView style={screenStyles.statusArea}>
            <ScrollView
                contentContainerStyle={screenStyles.container}
                keyboardShouldPersistTaps="handled"
            >
                <LinearGradient
                    colors={[Colors.THEME_PURPLE, Colors.THEME_BLUE]}
                    style={styles.header}
                >
                    <View style={screenStyles.row}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={Images.LOGO}
                                style={styles.logo}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={authStyles.headTextContainer}>
                            <Text style={authStyles.mainTxt}>Login</Text>
                            <AnimatedText
                                text="Orbital Webworks"
                                textStyle={authStyles.subTxt}
                                letterDelay={180}
                                animDuration={500}
                                pause={1000}
                            />
                        </View>
                    </View>
                </LinearGradient>

                <View style={screenStyles.form}>
                    <Spacer height={30} />
                    <OutlineInputBoxWithIcon
                        placeholder={{ text: 'Email Address', color: Colors.PLACEHOLDER }}
                        text={{ color: Colors.BLACK, fontSize: 16, fontFamily: 'Poppins-Medium' }}
                        startIcon={{ Component: Entypo, name: 'email' }}
                        activeBorderColor={Colors.THEME_PURPLE}
                        inactiveBorderColor={Colors.INPUT_BOX_INACTIVE_BORDER_COLOR}
                        activeIconColor={Colors.THEME_PURPLE}
                        inactiveIconColor={Colors.INPUT_BOX_INACTIVE_BORDER_COLOR}
                        keyboardType="email-address"
                    />

                    <OutlineInputBoxWithIcon
                        placeholder={{ text: 'Password', color: Colors.PLACEHOLDER }}
                        text={{ color: Colors.BLACK, fontSize: 16, fontFamily: 'Poppins-Medium' }}
                        startIcon={{ Component: Feather, name: 'lock' }}
                        secureTextEntry
                        passwordIcons={{
                            Component: Feather,
                            show: 'eye',
                            hide: 'eye-off',
                            color: Colors.GRAY,
                        }}
                        activeBorderColor={Colors.THEME_PURPLE}
                        inactiveBorderColor={Colors.INPUT_BOX_INACTIVE_BORDER_COLOR}
                        activeIconColor={Colors.THEME_PURPLE}
                        inactiveIconColor={Colors.INPUT_BOX_INACTIVE_BORDER_COLOR}
                    />
                    <Link label={"Forgot Password? Reset now"} color={Colors.THEME_PURPLE} />
                    <View style={screenStyles.btn}>
                        <GradientTextButton label='Login' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    header: {
        height: scale(250),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(20),
    },
    logoContainer: {
        padding: scale(5),
        backgroundColor: Colors.BLACK,
        alignSelf: 'center',
        borderRadius: scale(100),
        borderColor: Colors.WHITE,
        borderWidth: scale(2),
        marginBottom: verticalScale(10),
    },
    logo: {
        height: scale(80),
        width: scale(85),
        borderRadius: scale(100),
    },

});
