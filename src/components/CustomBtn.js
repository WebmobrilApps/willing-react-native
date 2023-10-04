import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import Scale from '../styles/Scale'

const CustomBtn = ({
  btnStyle,
  title,
  callBack,
  titleStyle,
  disabled = false
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={callBack}
      style={{ ...styles.btnContainer, ...btnStyle }}>
      <Text style={{ ...styles.btnTitle, ...titleStyle }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: Scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme,
    borderRadius: Scale(40),
  }, btnTitle: {
    fontSize: Scale(18),
    fontFamily: fontFamily.regular,
    color: colors.white
  }
})