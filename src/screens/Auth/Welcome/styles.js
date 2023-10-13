import { StyleSheet } from "react-native";
import Scale, { verticalScale } from "../../../styles/Scale";
import colors from "../../../styles/colors";

export default styles = StyleSheet.create({
    logoStyle: {
        height: Scale(150),
        width: Scale(150),
        alignSelf: 'center',
        marginTop: verticalScale(150),
        marginBottom: verticalScale(50)
    }, container: {
        flex:1,
        // paddingHorizontal: Scale(35),
        backgroundColor:colors.blackOpacity70
    }, btnStyle: {
        // width: '70%',
        backgroundColor: 'transparent',
        borderColor: colors.white,
        borderWidth: 1,
        marginTop:verticalScale(120),
        alignSelf:'center'
    }
})