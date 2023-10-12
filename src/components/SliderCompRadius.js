import React, { useState } from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import Slider from '@react-native-community/slider'
import PostInformation from '../utility/PostInformation.js';
import colors from '../styles/colors.js';




export default function SliderCompRadius(props) {
    const [expireDateIndex,setExpireDateIndex]=useState(props.postDetailsExpireDate)

    return (
        <View style={styles.container}>
            <Text style={{ width: "100%", color: "#393777", fontWeight: "bold", fontSize: 13 }}>
                <Text>{PostInformation.expireDate[expireDateIndex].text}</Text>
            </Text>
            <Slider
                thumbTintColor={colors.black}
                minimumTrackTintColor={colors.black}   
                maximumTrackTintColor={colors.black}  
                value={expireDateIndex}
                maximumValue={22}
                minimumValue={0}
                step={1}
                onSlidingComplete={(sliderValue) => { props.setPostDetailsExpireDate(sliderValue) }}
                onValueChange={(sliderValue) => { setExpireDateIndex(sliderValue) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginBottom: 10
    },
    when: {
        color: "#b4b3bf",
        fontSize: 13
    },
    whenDesc: {
        color: "#797983"
    },


})