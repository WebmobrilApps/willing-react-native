import React, { useState } from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import Slider from '@react-native-community/slider'
import PostInformation from '../utility/PostInformation.js';
import colors from '../styles/colors.js';
import Scale from '../styles/Scale.js';




export default function SliderCompWhen(props) {
    const [radiusIndex, setRadiusIndex] = useState(props.postDetailsRadius)

    return (
        <View style={styles.container}>
            <Text style={{ width: "100%", color: "#393777", fontWeight: "bold", fontSize: 13, }}>
                {PostInformation.radius[radiusIndex].number}
                <Text>{PostInformation.radius[radiusIndex].text}</Text>
            </Text>
            <Slider
            // style={{width:'100%',right:8}}
                thumbTintColor={colors.black}
                minimumTrackTintColor={colors.black}   
                maximumTrackTintColor={colors.black}  
                value={props.postDetailsRadius}
                maximumValue={63}
                minimumValue={0}
                step={1}
                onSlidingComplete={(sliderValue) => { props.setPostDetailsRadius(sliderValue) }}
                onValueChange={(sliderValue) => { setRadiusIndex(sliderValue) }} />
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