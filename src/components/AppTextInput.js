import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import Scale, { verticalScale } from '../styles/Scale'
import imagePath from '../constants/imagePath'

const AppTextInput = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  keyboardType,
  maxLength,
  editable,
  multiline,
  appTxtInputStyle,
  location
}) => {
  return (
    <View style={[styles.inputContainerStyle, appTxtInputStyle]}>
      <TextInput style={styles.txtInputStyle}
        placeholderTextColor={colors.black}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        textAlignVertical={'right'}
        autoCapitalize='none'
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
        multiline={multiline}
      />
      {!!location ? <Image source={imagePath.location} style={styles.IconStyle} /> : null}
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  inputContainerStyle: {
    width: '100%',
    height: verticalScale(38),
    borderRadius: Scale(30),
    borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: Scale(20),
    marginBottom: Scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30
  }, txtInputStyle: {
    width: '100%',
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlignVertical: 'center',
    fontSize: Scale(12),
  }, IconStyle: {
    height: Scale(18),
    width: Scale(18),
    marginRight: 20,
    resizeMode: 'contain'
  }
})