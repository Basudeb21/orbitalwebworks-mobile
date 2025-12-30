import { StyleSheet } from 'react-native';
import { Colors } from './../constants';
import { moderateScale, scale } from 'react-native-size-matters';

const authStyles = StyleSheet.create({
    statusArea: {
        flex: 1,
        backgroundColor: Colors.THEME_PURPLE,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    headTextContainer: {
        marginStart: moderateScale(15),
        justifyContent: "center"
    },
    mainTxt: {
        color: Colors.WHITE,
        fontWeight: "800",
        fontSize: scale(30),
        textAlign: "left"
    },
    subTxt: {
        color: Colors.WHITE,
        fontWeight: "800",
        fontSize: scale(14),
        textAlign: "left"

    }
});

export default authStyles;
