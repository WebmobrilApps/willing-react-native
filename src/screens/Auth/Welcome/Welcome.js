import { Text, Image } from 'react-native'
import React from 'react'
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

  const onSubmit = () => {
    dispatch({
      type:types.LOGIN,
      payload:'usertoken'
    })
  }

  return (
    <WrapperContainer
      wrapperStyle={styles.container}
      gradient>
      <Image source={imagePath.whiteLogo} style={styles.logoStyle} />
      <Text style={commonStyles.fontSizeBold32}>{strings.WELCOME_TO_WILLING}</Text>
      <Text style={[commonStyles.fontSize16, { color: colors.white, textAlign: 'center' }]}>{strings.CONGRATS_YOU_VERIFIED}</Text>
      <CustomBtn 
      callBack={() => onSubmit()}
      title={'Proceed'} 
      btnStyle={styles.btnStyle}/>
    </WrapperContainer>
  )
}

export default Welcome