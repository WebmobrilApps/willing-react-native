import { View, Text, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import commonStyles from '../../../styles/commonStyles'
import colors from '../../../styles/colors'
import MainContainerstyles from '../Login/styles'
import strings from '../../../constants/lng/LocalizedString'
import styles from './styles'
import CustomBtn from '../../../components/CustomBtn'
import Scale, { verticalScale } from '../../../styles/Scale'
import screensNames from '../../../constants/screensNames'

const VerificationCode = (props) => {
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

  return (
    <WrapperContainer wrapperStyle={MainContainerstyles.container}
      gradient>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={[commonStyles.fontSizeBold27, { color: colors.white, textAlign: 'center',marginBottom:Scale(5) }]}>{strings.VERIFICATION_CODE}</Text>
        <Text style={[commonStyles.fontSize14, { color: colors.white, textAlign: 'center' }]}>{strings.ENTER_VERIFICATION_CODE}</Text>
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
          <Text style={[commonStyles.fontSize14, { alignSelf: 'flex-end',marginTop:verticalScale(5),fontWeight:'700' }]}>Resend OTP <Text style={{color:colors.theme}}>00:16</Text></Text>
        </View>
        <CustomBtn
        callBack={() => props.navigation.navigate(screensNames.welcomeScreen)}
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