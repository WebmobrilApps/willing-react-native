import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import styles from './styles'
import imagePath from '../../../constants/imagePath'
import AppTextInput from '../../../components/AppTextInput'
import strings from '../../../constants/lng/LocalizedString'
import { Dropdown } from 'react-native-element-dropdown';
import Scale from '../../../styles/Scale'
import commonStyles from '../../../styles/commonStyles'
import CustomBtn from '../../../components/CustomBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../../../styles/colors'
import screensNames from '../../../constants/screensNames'
import countries from '../../../constants/countries.json';
import { logInUser } from '../../../redux/actions/auth'
import { validators } from '../../../utility/validationFunctions'
import { useNavigation } from '@react-navigation/native'



const Login = (props) => {
  const navigation = useNavigation()
  const initCountry = countries.countries.find((item) => item.code == "+972");
  console.log('intial country',initCountry);

  const [country, setCountry] = useState(initCountry.name+" (" + initCountry.code + ")");
  const [countryCode, setCountryCode] = useState(initCountry.code)
  const [mobile, setMobile] = useState('')
  const [terms, setTerms] = useState(false)

  const renderItem = item => {
    return (
      <View style={styles.renderItem}>
        <Text style={commonStyles.fontSize12}>{item.name + " (" + item.code + ")"} </Text>
      </View>
    );
  };

  console.log('country list',country);

  const onSubmit =  () => {
    if (validators.checkRequire("Country", country) &&
      (validators.checkNumber('Mobile number', 5, 15, mobile)) &&
      validators.checkAccept('terms and conditions', terms)) {
      logInUser(country,countryCode, mobile, navigation)
    }
  }

  return (
    <WrapperContainer wrapperStyle={styles.container}>
    <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        keyboardShouldPersistTaps={'handled'}
        scrollEnabled={true}
        // contentContainerStyle={[{flex:1}]}
        style={{ flex: 1, width: '100%', height: '100%' }}
        showsVerticalScrollIndicator={false}>
      <Image source={imagePath.logo} style={styles.logoStyle} />
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={styles.containerStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={commonStyles.fontSize12}
        data={countries.countries}
        selectedTextProps={{
          numberOfLines: 1,

        }}
        // maxHeight={300}
          renderItem={renderItem}
        labelField="name"
        valueField="code"
        imageField='image'
        placeholder={country}
        searchPlaceholder="Search..."
        value={country}
        onChange={item => {
          setCountry(item.name + " (" + item.code + ")");
          setCountryCode(item.code)
          // setIsFocus(false);

        }}
      />
      <AppTextInput
        keyboardType={'number-pad'}
        onChangeText={(txt) => setMobile(txt)}
        placeholder={strings.MOBILE_NUMBER} />
        <View style={[commonStyles.flexView,{flex:1,width:'100%',justifyContent:'flex-start'}]}>
        <TouchableOpacity onPress={() => setTerms(!terms)}
        style={styles.checkContainer}>
          {!! terms ? <Image source={imagePath.check} style={styles.checkIconStyle}/> :null }
        </TouchableOpacity>
        <Text style={commonStyles.fontSize10}>I confirm that I have read and I agree to <Text style={{color:colors.theme}}>terms {'\n'}and conditions.</Text></Text>
        </View>
        <CustomBtn
        callBack={onSubmit}
          title={strings.NXT}
          btnStyle={{marginTop:Scale(120)}} />
          </KeyboardAwareScrollView>
    </WrapperContainer>
  )
}

export default Login