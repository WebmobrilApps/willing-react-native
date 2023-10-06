import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import Scale, { verticalScale } from '../styles/Scale'

const TextInputComp = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  keyboardType,
  maxLength,
  editable,
  multiline,
  appTxtInputStyle,
}) => {
  return (
      <TextInput style={[styles.txtInputStyle,appTxtInputStyle]}
        placeholderTextColor={colors.black}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize='none'
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
        multiline={multiline}
      />
  )
}

export default TextInputComp

const styles = StyleSheet.create({
  txtInputStyle: {
    width:'100%',
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlignVertical: 'top',
    fontSize: Scale(12),
    minHeight: verticalScale(103),
    borderRadius:Scale(10),
    borderColor:colors.black,
    borderWidth:1,
    paddingHorizontal:Scale(20),
    marginBottom:Scale(10),
  }
})