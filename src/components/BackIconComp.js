import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import Scale from '../styles/Scale'
import { useNavigation } from '@react-navigation/native'

const BackIconComp = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}
      style={styles.container}>
      <Image source={imagePath.backIcon} style={styles.imgStyle} />
    </TouchableOpacity>
  )
}

export default BackIconComp

const styles = StyleSheet.create({
  container: {

  }, imgStyle: {
    height: Scale(18),
    width: Scale(11),
    resizeMode: 'contain'
  }
})