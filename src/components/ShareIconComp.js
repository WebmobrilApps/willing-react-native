import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import Scale from '../styles/Scale'
import { useNavigation } from '@react-navigation/native'
import colors from '../styles/colors'

const ShareIconComp = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.container}>
      <Image source={imagePath.share} style={styles.imgStyle} />
    </TouchableOpacity>
  )
}

export default ShareIconComp

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    padding: 10,
    // paddingLeft: 12
  }, imgStyle: {
    height: Scale(18),
    width: Scale(18),
    resizeMode: 'contain',
    tintColor:colors.white
  }
})