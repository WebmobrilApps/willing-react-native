import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import commonStyles from '../../styles/commonStyles'
import AppTextInput from '../../components/AppTextInput'
import TextInputComp from '../../components/TextInputComp'
import fontFamily from '../../styles/fontFamily'
import { verticalScale } from '../../styles/Scale'
import CustomBtn from '../../components/CustomBtn'

const Support = () => {
  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <View style={styles.container}>
        <AppTextInput
        placeholder={'Full Name'}/>
        <AppTextInput
        placeholder={'Email'}/>
        <Text style={[commonStyles.fontSize12,{fontFamily:fontFamily.medium,alignSelf:'center',marginBottom:verticalScale(10)}]}>Description</Text>
        <TextInputComp/>
        <CustomBtn btnStyle={{marginTop:verticalScale(100)}}
        title={'Next'}/>
      </View>
    </SafeAreaView>
  )
}

export default Support