import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import Scale from '../styles/Scale'
import { useNavigation } from '@react-navigation/native'
import { isRTL } from '../constants/constants'

const BackIconComp = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}
      style={styles.container}>
      <Image source={imagePath.backIcon} style={[styles.imgStyle,{transform:[{rotate:isRTL? '180deg': '0deg'}]}]} />
    </TouchableOpacity>
  )
}

export default BackIconComp

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    padding: 10,
    paddingLeft: 12
  }, imgStyle: {
    height: Scale(18),
    width: Scale(11),
    resizeMode: 'contain'
  }
})