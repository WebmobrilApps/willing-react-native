import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../styles/commonStyles'
import Scale, { verticalScale } from '../../styles/Scale';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import SliderCompWhen from '../../components/SliderCompWhen';
import AppTextInput from '../../components/AppTextInput';
import CustomBtn from '../../components/CustomBtn';
import { useNavigation } from '@react-navigation/native';
import strings from '../../constants/lng/LocalizedString';

const Location = (props) => {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const [distance, setDistance] = useState(false)
    const [city, setCity] = useState(false)
    const [postDetailsRadius, setPostDetailsRadius] = useState(
        0
      );


    const params = {
        sliderWhere: {
          postDetailsRadius:postDetailsRadius,
          setPostDetailsRadius: setPostDetailsRadius
        },
      }


    return (
        <SafeAreaView style={commonStyles.mainContainer}>
            <View style={[commonStyles.mainContainer, { padding: Scale(20),paddingBottom:verticalScale(40) }]}>
                <View style={[commonStyles.flexView, { alignItems: 'flex-start', paddingBottom: Scale(10),paddingTop:verticalScale(10) }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>From Everywhere</Text>
                        <Text style={[commonStyles.fontSize10, { marginRight: Scale(50) }]}>Lorem ipsum dolor sit amet consectetur. Lobortis vitae
                            sitsed mattis viverra hendrerit tempus. Ornarear ticufames
                            rhoncus </Text>
                    </View>
                    <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
                        <Image source={!!isEnabled ? imagePath.activeSwitch : imagePath.inActiveSwitch}
                            style={commonStyles.switchBtnStyle} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setDistance(!distance)}
                    style={[commonStyles.flexView, { justifyContent: 'flex-start', marginVertical: verticalScale(10),marginBottom:verticalScale(0) }]}>
                    <View style={commonStyles.circle}>
                        {!!distance ? <View style={commonStyles.checkBox}>
                        </View> : null}
                    </View>
                    <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Distance from you</Text>
                </TouchableOpacity>
                <SliderCompWhen {...params.sliderWhere} />
                <TouchableOpacity onPress={() => setCity(!city)}
                    style={[commonStyles.flexView, { justifyContent: 'flex-start', marginBottom: verticalScale(3),marginTop:verticalScale(12) }]}>
                    <View style={commonStyles.circle}>
                        {!!city ? <View style={commonStyles.checkBox}>
                        </View> : null}
                    </View>
                    <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Specific city</Text>
                </TouchableOpacity>
                <Text style={commonStyles.fontSize10}>Enter a city name from which you would like to receive alerts</Text>
                <AppTextInput
                appTxtInputStyle={{borderRadius:0,marginTop:verticalScale(20)}}
                placeholder={'Enter city name'}
                />
                <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
                <CustomBtn 
                callBack={() => navigation.goBack()}
                btnStyle={{width:'75%',alignSelf:'center',marginBottom:verticalScale(40)}}
                title={strings.settingsNotification_addToList}
                />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Location