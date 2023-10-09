import { Text, Image, View, BackHandler, Platform, Alert, ToastAndroid } from 'react-native'
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
      type:types.USER_TYPE,
      payload:'user'
    })
  }

  return (
    <WrapperContainer
      wrapperStyle={styles.container}
      gradient>
      <View style={{alignItems:'center',flex:0.86,justifyContent:'flex-end'}}>
      <Image source={imagePath.whiteLogo} style={styles.logoStyle} />
      <Text style={commonStyles.fontSizeBold30}>{strings.WELCOME_TO_WILLING}</Text>
      <Text style={[commonStyles.fontSize16, { color: colors.white, textAlign: 'center' }]}>{strings.CONGRATS_YOU_VERIFIED}</Text>
      <CustomBtn 
      callBack={() => onSubmit()}
      title={'Proceed'} 
      btnStyle={styles.btnStyle}/>
      </View>
    </WrapperContainer>
  )
}

export default Welcome