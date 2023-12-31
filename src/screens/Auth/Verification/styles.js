import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import Scale, { verticalScale } from "../../../styles/Scale";
import fontFamily from "../../../styles/fontFamily";

export default styles = StyleSheet.create({
    otpContainer: {
        backgroundColor: colors.white,
        height: Scale(220),
        borderRadius: Scale(13),
        marginVertical: verticalScale(80),
        padding: Scale(10),
        justifyContent: 'center'
    }, txtInputContainer: {
        backgroundColor: colors.white,
        borderRadius: Scale(13),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:verticalScale(20)
    }, txtInputStyle: {
        // height: verticalScale(35),
        width: Scale(30),
        textAlign: 'center',
        borderColor: colors.black,
        color: colors.black,
        borderBottomColor: colors.black,
        borderBottomWidth: Scale(2),
    }, resendView: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(10),
    }, otpInput: {
        borderBottomWidth: 2,
        borderBottomColor: colors.txtColor,
        width: Scale(35),
        height: verticalScale(50),
        // borderRadius: Scale(1),
        paddingVertical: Scale(5),
        fontStyle: fontFamily.medium,
        color: colors.txtColor,
        // backgroundColor: colors.red,
        fontSize: 22,
        textAlign: 'center',
        marginHorizontal:Scale(4)
    }
})