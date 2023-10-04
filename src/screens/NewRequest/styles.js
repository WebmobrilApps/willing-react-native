import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import Scale from "../../styles/Scale";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        // paddingHorizontal: Scale(20)
    }, newRequestChooseCategory: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingHorizontal: 10,
    }, categoryButton: {
        width: Scale(97),
        height: 100,
        margin: 7,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        borderColor:colors.borderColor,
        borderWidth:1,
    }, ctegoryImg: {
        marginTop: 10,
        width: Scale(30),
        alignItems: "center",
        height:Scale(30),
        tintColor:colors.txtColor
    },
    categorylabel: {
        alignContent: "flex-end",
        fontSize: Scale(10),
        paddingTop: 3,
        color: colors.txtColor,
    },
    categoryBox: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent:'center'
    },
})