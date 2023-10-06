import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import Scale, { verticalScale } from '../../styles/Scale'
import CustomBtn from '../CustomBtn'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'

const PopUpMessage = ({
    modalVisible,
    close,
    onPress
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
                        <Text style={commonStyles.fontSizeBold24}>“Congratulations!”</Text>
                        <Text style={[commonStyles.fontSize20, { fontFamily: fontFamily.medium }]}>you’re verified!</Text>
                        <Text style={[commonStyles.fontSize20, { color: colors.theme, fontFamily: fontFamily.medium, marginVertical: verticalScale(20) }]}>Welcome To Willing</Text>
                        <CustomBtn 
                        callBack={onPress}
                        title={'PROCEED'} />
                    </TouchableOpacity>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}

export default PopUpMessage

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
    },
})