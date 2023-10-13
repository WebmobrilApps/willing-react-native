import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import Scale, { verticalScale } from '../../styles/Scale'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'
import AppTextInput from '../../components/AppTextInput'
import CustomBtn from '../../components/CustomBtn'
import imagePath from '../../constants/imagePath'
import screensNames from '../../constants/screensNames'
import { useNavigation } from '@react-navigation/native'
const { height } = Dimensions.get('window')





const NewRequestContact = (props) => {
  const [value, setvalue] = useState('myself')
  const [visible, setVisible] = useState(false)
  const navigation = useNavigation()

  const onPressRadioBtn = (type) => {
    setvalue(type)
  }


  return (
    <View style={[styles.container, { height: height / 1.2 }]}>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium,marginBottom:verticalScale(5) }]}>Please fill the below details:</Text>
      <TouchableOpacity onPress={() => onPressRadioBtn('myself')}
        style={[commonStyles.flexView, { justifyContent: 'flex-start', marginVertical: verticalScale(10) }]}>
        <View style={commonStyles.circle}>
          {value == 'myself' ? <View style={commonStyles.checkBox}>
          </View> : null}
        </View>
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>My Details</Text>
      </TouchableOpacity>
      {value == 'myself' ?
        <>
          <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginLeft: Scale(27), marginBottom: verticalScale(5) }]}>Name</Text>
          <AppTextInput appTxtInputStyle={{ marginBottom: Scale(10) }} />
          <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginHorizontal: Scale(10), marginBottom: verticalScale(5), marginLeft: Scale(27) }]}>Mobile Number</Text>
          <AppTextInput />
        </> : null}
      <TouchableOpacity onPress={() => onPressRadioBtn('someOneElse')}
        style={[commonStyles.flexView, { justifyContent: 'flex-start', marginVertical: verticalScale(10),marginTop:verticalScale(1) }]}>
        <View style={commonStyles.circle}>
          {value == 'someOneElse' ? <View style={commonStyles.checkBox}>
          </View> : null}
        </View>
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Request on behalf of someone else</Text>

      </TouchableOpacity>
      {value == 'someOneElse' ?
        <>
          <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginLeft: Scale(27), marginBottom: verticalScale(5) }]}>Name</Text>
          <AppTextInput appTxtInputStyle={{ marginBottom: Scale(10) }} />
          <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginHorizontal: Scale(10), marginBottom: verticalScale(5), marginLeft: Scale(27) }]}>Mobile Number</Text>
          <AppTextInput />
          <TouchableOpacity onPress={() => navigation.navigate(screensNames.contactList)}
            style={[commonStyles.flexView, { justifyContent: 'flex-start',marginTop:verticalScale(20) }]}>
            <Image source={imagePath.contact} style={styles.contactIcon} />
            <Text style={commonStyles.fontSize14}>Chose from your contacts list</Text>
          </TouchableOpacity>
        </> : null}

      <CustomBtn title={'NEXT'}
        btnStyle={{ width: '70%', alignSelf: 'center', position: 'absolute', bottom: verticalScale(70) }}
        callBack={() => navigation.navigate('WILLING')}
      />
    </View>
  )
}

export default NewRequestContact

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: Scale(20),
  }, contactIcon: {
    height: Scale(20),
    width: Scale(20),
    resizeMode: 'contain',
    marginRight: Scale(10)
  }
})