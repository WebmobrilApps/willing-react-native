import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import Scale, { verticalScale } from '../../styles/Scale'
import CustomBtn from '../CustomBtn'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'

const PostSuccessPopUp = ({
    modalVisible,
    close,
}) => {
    return (
        <Modal style={styles.container}
            animationType={'fade'}
            visible={modalVisible}
            transparent={true}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={close}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.innerContainer}>
                        <Image source={imagePath.successIcon} style={styles.iconStyle}/>
                        <Text style={[commonStyles.fontSizeBold24,{textAlign:'center',marginVertical:verticalScale(10)}]}>“Congratulations!”</Text>
                        <Text style={[commonStyles.fontSize20, { fontFamily: fontFamily.medium, textAlign:'center' }]}>You’ve successfully posted
                        a request.</Text>
                    </TouchableOpacity>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}

export default PostSuccessPopUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.blackOpacity70
    }, innerContainer: {
        backgroundColor: colors.white,
        padding: Scale(20),
        marginHorizontal: Scale(50),
        borderRadius: Scale(15),
        justifyContent: 'center',
        alignItems: 'center'
    },iconStyle:{
        height:Scale(60),
        width:Scale(60),
        resizeMode:'contain'
    }
})