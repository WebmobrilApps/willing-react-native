import { Image, Text, View } from 'react-native'
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


const Login = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
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
        style={[styles.dropdown, { marginRight: Scale(5) }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={styles.containerStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={commonStyles.fontSize12}
        data={data}
        selectedTextProps={{
          numberOfLines: 1,

        }}
        maxHeight={300}
        //   renderItem={renderItem}
        labelField="label"
        valueField="value"
        imageField='image'
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);

        }}
      />
      <AppTextInput
        placeholder={strings.MOBILE_NUMBER} />
        <View style={[commonStyles.flexView,{flex:1,width:'100%',justifyContent:'flex-start'}]}>
        <View style={styles.checkContainer}>
        </View>
        <Text style={commonStyles.fontSize10}>I confirm that I have read and I agree to <Text style={{color:colors.theme}}>terms {'\n'}and conditions.</Text></Text>
        </View>
        <CustomBtn
        callBack={() => props.navigation.navigate(screensNames.verifyOtp)}
          title={strings.NXT}
          btnStyle={{marginTop:Scale(120)}} />
          </KeyboardAwareScrollView>
    </WrapperContainer>
  )
}

export default Login