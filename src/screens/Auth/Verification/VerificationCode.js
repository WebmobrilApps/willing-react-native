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
import screensNames from '../../../constants/screensNames'
import { resendOtp, verifyMobileOtp } from '../../../redux/actions/auth'
import Toast from 'react-native-simple-toast'
import { useNavigation } from '@react-navigation/native'
import fontFamily from '../../../styles/fontFamily'

const VerificationCode = (props) => {
  const preData = props.route.params.data
  const navigation = useNavigation()
  const [count, setCount] = useState(30)
  const [otp, setOtp] = useState(preData.otp)


  console.log('pre data',preData.token);
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');

  const et1 = useRef()
  const et2 = useRef()
  const et3 = useRef()
  const et4 = useRef()
  const et5 = useRef()
  const et6 = useRef()

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
    const otp = f1 + f2 + f3 + f4+ f5 + f6
    if (otp == '') {
      Toast.show('please enter otp')
    } else {
      verifyMobileOtp(preData.token, otp, navigation)
    }
  }

  const onResendOtp = async () => {
    setCount(30)
    resendOtp(preData.token).then(res => {
      // console.log('otp',res)
      setOtp(res.data.otp)
    })
  }

  return (
    <WrapperContainer wrapperStyle={MainContainerstyles.container}
      gradient>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={[commonStyles.fontSizeBold27, { color: colors.white, textAlign: 'center',marginBottom:Scale(5) }]}>{strings.VERIFICATION_CODE}</Text>
        <Text style={[commonStyles.fontSize14, { color: colors.white, textAlign: 'center' }]}>{strings.ENTER_VERIFICATION_CODE}  {otp}</Text>
        <View style={styles.otpContainer}>
          <View style={styles.txtInputContainer}>
            <TextInput
              maxLength={1}
              ref={et1}
              keyboardType='number-pad'
              onChangeText={txt => {
                setF1(txt)
                if (txt.length >= 1) {
                  et2.current.focus()
                }
              }}
              style={styles.txtInputStyle} />
            <TextInput
              maxLength={1}
              ref={et2}
              keyboardType='number-pad'
              onChangeText={txt => {
                setF2(txt)
                if (txt.length >= 1) {
                  et3.current.focus()
                } else if (txt.length < 1) {
                  et1.current.focus()
                }
              }}
              style={styles.txtInputStyle} />
            <TextInput
              maxLength={1}
              ref={et3}
              keyboardType='number-pad'
              onChangeText={txt => {
                setF3(txt)
                if (txt.length >= 1) {
                  et4.current.focus()
                } else if (txt.length < 1) {
                  et2.current.focus()
                }
              }}
              style={styles.txtInputStyle} />
            <TextInput
              maxLength={1}
              ref={et4}
              keyboardType='number-pad'
              onChangeText={txt => {
                setF4(txt)
                if (txt.length >= 1) {
                  et5.current.focus()
                } else if (txt.length < 1) {
                  et3.current.focus()
                }
              }}
              style={styles.txtInputStyle} />
            <TextInput
              maxLength={1}
              ref={et5}
              keyboardType='number-pad'
              onChangeText={txt => {
                setF5(txt)
                if (txt.length >= 1) {
                  et6.current.focus()
                } else if (txt.length < 1) {
                  et4.current.focus()
                }
              }}
              style={styles.txtInputStyle} />
            <TextInput
              maxLength={1}
              ref={et6}
              keyboardType='number-pad'
              onChangeText={txt => {
                setF6(txt)
                if (txt.length >= 1) {
                  et6.current.focus()
                } else if (txt.length < 1) {
                  et5.current.focus()
                }
              }}
              style={styles.txtInputStyle} />
          </View>
          <View style={styles.resendView}>
            <Text
              disabled={count > 0}
              style={[commonStyles.fontSize12, { color: count == 0 ? colors.black : colors.grey }]}
              onPress={() => {
                onResendOtp();
              }}>Resend OTP</Text>
            {count !== 0 && (
              <Text style={{ marginLeft: 10, fontSize: Scale(12), color: colors.black, fontFamily: fontFamily.bold }}>
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
            borderWidth: 1
          }}
          title={strings.NXT} />
      </View>
    </WrapperContainer>
  )
}

export default VerificationCode