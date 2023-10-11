import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import commonStyles from '../../../styles/commonStyles'
import colors from '../../../styles/colors'
import MainContainerstyles from '../Login/styles'
import strings from '../../../constants/lng/LocalizedString'
import styles from './styles'
import CustomBtn from '../../../components/CustomBtn'
import Scale, { verticalScale } from '../../../styles/Scale'
import { resendOtp, verifyMobileOtp } from '../../../redux/actions/auth'
import Toast from 'react-native-simple-toast'
import { useNavigation } from '@react-navigation/native'
import fontFamily from '../../../styles/fontFamily'
import PopUpMessage from '../../../components/Modal/PopUpMessage'
import OtpInputs from 'react-native-otp-inputs'
import { ConsoleLog } from '../../../utility/helperFunction'


const VerificationCode = (props) => {
  const preData = props.route.params.data
  const navigation = useNavigation()
  const [count, setCount] = useState(30)
  const [preOtp, setPreOtp] = useState(preData.otp)
  const [otp, setOtp] = useState('')
  const [modalVisible, setModalVisible] = useState(false)


  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const onSubmit = () => {
    // return ConsoleLog('tet',otp.length);
    if (otp.length != 6) {
      Toast.show('please enter 6 digit otp')
    } else {
      verifyMobileOtp(preData.token, otp, navigation)
    }
  }

  const onResendOtp = async () => {
    setCount(30)
    resendOtp(preData.token).then(res => {
      setPreOtp(res.data.otp)
    })
  }

  return (
    <WrapperContainer wrapperStyle={MainContainerstyles.container}
      gradient>
      <PopUpMessage
        modalVisible={modalVisible}
        close={() => setModalVisible(false)}
        onPress={() => setModalVisible(false)} />
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={[commonStyles.fontSizeBold27, { color: colors.white, textAlign: 'center', marginBottom: Scale(5) }]}>{strings.VERIFICATION_CODE}</Text>
        <Text style={[commonStyles.fontSize14, { color: colors.white, textAlign: 'center' }]}>{strings.ENTER_VERIFICATION_CODE}  {preOtp}</Text>
        <View style={styles.otpContainer}>
          <View style={styles.txtInputContainer}>
            <OtpInputs
              clearTextOnFocus
              handleChange={e => setOtp(e)}
              keyboardType="phone-pad"
              numberOfInputs={6}

              style={{
                // width: ,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center'
              }}
              inputStyles={styles.otpInput}
              //   ref={otpRef}
              selectTextOnFocus={false}
            />
          </View>
          <View style={styles.resendView}>
            <Text
              disabled={count > 0}
              style={[commonStyles.fontSize12, { color: count == 0 ? colors.black : colors.grey }]}
              onPress={() => {
                onResendOtp();
              }}>Resend OTP</Text>
            {count !== 0 && (
              <Text style={{ marginLeft: 10, fontSize: Scale(12), color: colors.theme, fontFamily: fontFamily.bold }}>
                {'00:' + count}
              </Text>
            )}
          </View>
        </View>
        <CustomBtn
          callBack={() => onSubmit()}
          btnStyle={{
            width: '100%',
            backgroundColor: 'transparent',
            borderColor: colors.white,
            borderWidth: 1,
            marginTop: verticalScale(50)
          }}
          title={strings.NXT} />
      </View>
    </WrapperContainer>
  )
}

export default VerificationCode