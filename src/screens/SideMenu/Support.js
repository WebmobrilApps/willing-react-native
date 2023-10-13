import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import commonStyles from '../../styles/commonStyles'
import AppTextInput from '../../components/AppTextInput'
import TextInputComp from '../../components/TextInputComp'
import fontFamily from '../../styles/fontFamily'
import Scale, { verticalScale } from '../../styles/Scale'
import CustomBtn from '../../components/CustomBtn'
import strings from '../../constants/lng/LocalizedString'
import { useNavigation } from '@react-navigation/native'

const Support = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <View style={[commonStyles.mainContainer,{padding:Scale(40),paddingTop:verticalScale(45)}]}>
        <AppTextInput
        placeholder={'Full Name'}/>
        <AppTextInput
        placeholder={'Email'}
        appTxtInputStyle={{marginBottom:verticalScale(18)}}/>
        <Text style={[commonStyles.fontSize12,{fontFamily:fontFamily.medium,alignSelf:'center',marginBottom:verticalScale(10),marginTop:verticalScale(0)}]}>Description</Text>
        <TextInputComp/>
        <CustomBtn btnStyle={{marginTop:verticalScale(200)}}
        callBack={() => navigation.goBack()}
        title={strings.NXT}/>
      </View>
    </SafeAreaView>
  )
}

export default Support
