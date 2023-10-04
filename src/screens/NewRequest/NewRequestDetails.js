import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from '../../components/CustomBtn';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import Scale, { verticalScale } from '../../styles/Scale';
import AppTextInput from '../../components/AppTextInput';
import TextInputComp from '../../components/TextInputComp';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import SliderCompWhen from '../../components/SliderCompWhen';

const NewRequestDetails = (props) => {

  const {
    setActivePage,
  } = props;

  const [postDetailsRadius, setPostDetailsRadius] = useState(
    0
  );



  const onNextBtnPress = () => {
    setActivePage(2);
  };

  const params = {
    sliderWhere: {
      postDetailsRadius:postDetailsRadius,
      setPostDetailsRadius: setPostDetailsRadius
    },
  }
  
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Please fill the below details:</Text>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: verticalScale(10) }]}>Description</Text>
      <TextInputComp
        multiline={true}
      />
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Image</Text>
      <TouchableOpacity style={{ marginVertical: verticalScale(10) }}>
        <Image source={imagePath.plusIcon} style={styles.plusImgStyle} />
      </TouchableOpacity>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: verticalScale(10) }]}>Location-Default Current</Text>
      <AppTextInput location appTxtInputStyle={{ width: '100%' }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: verticalScale(10) }]}>Urgency Level</Text>
          <AppTextInput />
        </View>
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: verticalScale(10) }]}>Until when to post?</Text>
          <AppTextInput />
        </View>
      </View>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>What radius from the location should be posted?</Text>
      <SliderCompWhen {...params.sliderWhere} />

      <CustomBtn title={'Next'}
      btnStyle={{marginBottom:verticalScale(20)}}
        callBack={onNextBtnPress} />
    </View>
  )
}

export default NewRequestDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Scale(20)
  }, plusImgStyle: {
    height: Scale(38),
    width: Scale(38),
    resizeMode: 'contain'
  }
})