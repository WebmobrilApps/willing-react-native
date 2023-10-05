import { StyleSheet } from "react-native";
import Scale, { verticalScale } from "../../../styles/Scale";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";

export default styles = StyleSheet.create({
    container:{
        paddingHorizontal:Scale(50),
        backgroundColor:colors.white,
    },logoStyle:{
        height:Scale(140),
        width:Scale(140),
        marginBottom:Scale(100),
        marginTop:verticalScale(40),
        alignSelf:'center'
    },dropdown: {
        height: verticalScale(38),
        borderColor: colors.black,
        borderWidth: Scale(1),
        borderRadius: Scale(20),
        paddingHorizontal: Scale(15),
        marginBottom: verticalScale(20),
        color: colors.black,
        width: '100%',
        // backgroundColor:'red'
    }, icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: colors.black
    },
    placeholderStyle: {
        fontSize: Scale(12),
        fontFamily: fontFamily.regular,
        color: colors.black,
    },
    selectedTextStyle: {
        fontSize: Scale(12),
        fontFamily: fontFamily.regular,
        color: colors.black,
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: colors.black
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: colors.black
    }, itemTextStyle: {
        color: colors.black
    }, leftIconStyle: {
        height: verticalScale(18),
        width: Scale(18),
        resizeMode: 'contain',
        marginRight: Scale(10),
    }, containerStyle: {
        borderColor: colors.black,
        borderWidth:0,
        // backgroundColor:'red',
        bottom:40
    }, itemContainerStyle: {
        // backgroundColor: colors.red,
        // marginBottom:40
    }, imageStyle: {
        width: 24,
        height: 24,
    },renderItem:{
        flexDirection:'row',
        padding:Scale(10),
    },checkContainer:{
        height:Scale(20),
        width:Scale(20),
        borderRadius:Scale(4),
        borderColor:colors.black,
        borderWidth:1,
        marginRight:Scale(11),
        justifyContent:'center',
        alignItems:'center'
    },checkIconStyle:{
        height:Scale(12),
        width:Scale(12),
        resizeMode:'contain',
        tintColor:colors.theme
    },
})