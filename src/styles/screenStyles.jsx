import { StyleSheet } from 'react-native';
import { Colors } from './../constants';
import { moderateScale, scale } from 'react-native-size-matters';

const screenStyles = StyleSheet.create({
    statusArea: {
        flex: 1,
        backgroundColor: Colors.THEME_PURPLE,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    row: {
        flexDirection: "row"
    },
    form: {
        paddingHorizontal: moderateScale(15),
        flex: 1,
    },
    btn: {
        position: "absolute",
        bottom: scale(50),
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        alignSelf: "center"
    }
});

export default screenStyles;
