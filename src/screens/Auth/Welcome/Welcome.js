import { Text, Image, View, BackHandler, Platform, Alert, ToastAndroid, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import imagePath from '../../../constants/imagePath'
import styles from './styles'
import strings from '../../../constants/lng/LocalizedString'
import commonStyles from '../../../styles/commonStyles'
import colors from '../../../styles/colors'
import CustomBtn from '../../../components/CustomBtn'
import { useDispatch } from 'react-redux'
import types from '../../../redux/types'
import Scale from '../../../styles/Scale'



const Welcome = (props) => {

  const dispatch = useDispatch()


  const [exitApp, setExitApp] = useState(0);
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time
    if (exitApp === 0) {
      setExitApp(exitApp + 1);
      ToastAndroid.show(
        'Press one more time to exit', ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  const onSubmit = () => {
    dispatch({
      type: types.USER_TYPE,
      payload: 'user'
    })
  }

  return (
    <ImageBackground source={imagePath.bgImage} style={[styles.container]}>
    <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
    <View style={{flex:1,backgroundColor:colors.blackOpacity70,width:'100%',paddingHorizontal: Scale(35),  }}>
      <View style={{ alignItems: 'center', flex: 0.86, justifyContent: 'flex-end' }}>
        <Image source={imagePath.whiteLogo} style={styles.logoStyle} />
        <Text style={commonStyles.fontSizeBold30}>{strings.WELCOME_TO_WILLING}</Text>
        <Text style={[commonStyles.fontSize16, { color: colors.white, textAlign: 'center' }]}>{strings.CONGRATS_YOU_VERIFIED}</Text>
        <CustomBtn
          callBack={() => onSubmit()}
          title={'PROCEED'}
          btnStyle={styles.btnStyle} />
      </View>
      </View>
      </ImageBackground>
  )
}

export default Welcome