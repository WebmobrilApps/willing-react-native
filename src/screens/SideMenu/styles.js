import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import Scale, { verticalScale } from "../../styles/Scale";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },rightArro:{
        tintColor:colors.black,
        height:verticalScale(12),
        width:Scale(8),
        resizeMode:'contain'
    }
})