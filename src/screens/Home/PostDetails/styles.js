import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import Scale, { verticalScale } from "../../../styles/Scale";

export default styles = StyleSheet.create({
    container:{
        padding:Scale(10),
        borderBottomColor:colors.borderColor,
        borderBottomWidth:1,
        paddingHorizontal:Scale(20)
    },iconStyle:{
        height:Scale(16),
        width:Scale(16),
        resizeMode:'contain',
        marginRight:Scale(10),
        // tintColor:colors.txtColor
    },categoryImgStyle:{
        height:Scale(22),
        width:Scale(22),
        tintColor:colors.theme,
        resizeMode:'contain',
        marginRight:Scale(5)
    },imgStyle:{
        height:verticalScale(240),
        width: '90%',
        borderRadius: 7
    },roudContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Scale(22),
        alignSelf:'center',
        borderColor:'rgba(186, 186, 186, 1)',
        borderWidth:1,
        backgroundColor:colors.white,
        padding:Scale(10),
    },upArrow:{
        height:Scale(10),
        width:Scale(10),
        resizeMode:'contain',
        tintColor:colors.theme,
    },socialIconStyle:{
        height:Scale(20),
        width:Scale(20),
        resizeMode:'contain'
    }
})