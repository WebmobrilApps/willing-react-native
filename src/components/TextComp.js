import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../styles/commonStyles'

const TextComp = ({
    style,
}) => {
    return (
        <Text style={{...commonStyles.fontSize14,...style}}>TextComp</Text>
    )
}

export default TextComp

const styles = StyleSheet.create({
    
})