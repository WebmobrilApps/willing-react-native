import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import Scale from "../../styles/Scale";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },circleContainer:{
        height:Scale(22),
        width:Scale(22),
        borderRadius:Scale(11),
        borderColor:colors.txtColor,
        borderWidth:1.5,
        justifyContent:'center',
        alignItems:'center'
    },itemSeperator:{
        height:Scale(2),
        backgroundColor:colors.txtColor,
        width:Scale(31),
        marginHorizontal:Scale(4)
    }
})