import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import commonStyles from '../../styles/commonStyles'
import Scale, { verticalScale } from '../../styles/Scale'
import fontFamily from '../../styles/fontFamily'
import AppTextInput from '../../components/AppTextInput'
import colors from '../../styles/colors'
import CustomBtn from '../../components/CustomBtn'

const Keyword = () => {

  return (
    <SafeAreaView style={commonStyles.mainContainer}>
        <View style={[commonStyles.mainContainer,{padding:Scale(20)}]}>
            <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>Send notification if the following words appears inside the
            request</Text>
            <AppTextInput 
            placeholder={'Enter Keyword'}
            appTxtInputStyle={{borderRadius:0,marginVertical:Scale(15)}}/>
            <View style={[commonStyles.flexView,{justifyContent:'flex-start'}]}>
            <TouchableOpacity style={styles.bubbleStyle}>
                <Text style={[commonStyles.fontSize10,{marginRight:Scale(5)}]}>Medical</Text>
                <Text style={commonStyles.fontSize10}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bubbleStyle}>
                <Text style={[commonStyles.fontSize10,{marginRight:Scale(5)}]}>Vehical</Text>
                <Text style={commonStyles.fontSize10}>x</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:'flex-end',paddingBottom:verticalScale(60)}}>
            <CustomBtn title={'ADD TO LIST'}
            btnStyle={{width:'80%',alignSelf:'center'}}/>
        </View>
        </View>
       
    </SafeAreaView>
  )
}

export default Keyword

const styles = StyleSheet.create({
    bubbleStyle:{
        height:verticalScale(20),
        borderColor:colors.black,
        borderWidth:1,
        // padding:Scale(5),
        flexDirection:'row',
        paddingHorizontal:Scale(8),
        marginRight:Scale(12)
    }
})