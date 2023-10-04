import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { verticalScale } from '../styles/Scale'

const ItemSeperator = ({seperatorStyle}) => {
  return (
    <View style={[styles.seperatorStyle,seperatorStyle]}/>
  )
}

export default ItemSeperator
const styles = StyleSheet.create({
    seperatorStyle:{
        borderBottomColor:'rgba(186, 186, 186, 1)',
        borderBottomWidth:1,
        width:'100%',
        alignSelf:'center',
    }
})