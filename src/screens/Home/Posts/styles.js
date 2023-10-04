import { StyleSheet } from "react-native";
import Scale, { verticalScale } from "../../../styles/Scale";
import colors from "../../../styles/colors";

export default styles = StyleSheet.create({
    container:{
        paddingVertical:verticalScale(15),
        flex:1
    },iconStyle:{
        height:Scale(22),
        width:Scale(22),
        resizeMode:'contain',
        marginRight:Scale(10),
        tintColor:colors.theme
    },imgStyle:{
        height:verticalScale(220),
        width:'90%',
        borderRadius:7
    },infoContainer:{
        alignItems:'center',
        flexDirection:'row',
    },infoIconStyle:{
        height:Scale(16),
        width:Scale(16),
        resizeMode:'contain',
        marginRight:Scale(5)
    }, indicatorView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10)
    }
})