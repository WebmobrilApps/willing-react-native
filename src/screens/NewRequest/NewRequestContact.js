import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Scale, { verticalScale } from '../../styles/Scale'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'
import AppTextInput from '../../components/AppTextInput'
import CustomBtn from '../../components/CustomBtn'

const NewRequestContact = () => {
  const [value, setvalue] = useState('myself')

  const onPressRadioBtn = (type) => {
    setvalue(type)
  }

  return (
    <View style={styles.container}>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Please fill the below details:</Text>
      <TouchableOpacity onPress={() => onPressRadioBtn('myself')}
        style={[commonStyles.flexView, { justifyContent: 'flex-start', marginVertical: verticalScale(10) }]}>
        <View style={commonStyles.circle}>
          {value == 'myself' ? <View style={commonStyles.checkBox}>
          </View> : null}
        </View>
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>My Details</Text>
      </TouchableOpacity>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginLeft: Scale(27), marginBottom: verticalScale(5) }]}>Name</Text>
      <AppTextInput appTxtInputStyle={{ marginBottom: Scale(10) }} />
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginHorizontal: Scale(10), marginBottom: verticalScale(5) }]}>Mobile Number</Text>
      <AppTextInput />
      <TouchableOpacity onPress={() => onPressRadioBtn('someOneElse')}
        style={[commonStyles.flexView, { justifyContent: 'flex-start', marginVertical: verticalScale(10) }]}>
        <View style={commonStyles.circle}>
          {value == 'someOneElse' ? <View style={commonStyles.checkBox}>
          </View> : null}
        </View>
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Request on behalf of someone else</Text>

        </TouchableOpacity>
        <CustomBtn title={'Next'}
        btnStyle={{marginTop:verticalScale(100)}}/>
    </View>
  )
}

export default NewRequestContact

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: Scale(20),
  }
})