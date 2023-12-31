import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../styles/commonStyles'
import { useNavigation } from '@react-navigation/native'
import Scale, { verticalScale } from '../../styles/Scale'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'
import ItemSeperator from '../../components/ItemSeperator'
import DatePicker from 'react-native-date-picker'
import colors from '../../styles/colors'


const QuietHours = () => {
  const navigation = useNavigation()
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState(new Date())

  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <View style={[commonStyles.flexView, { padding: Scale(20), alignItems: 'flex-start', paddingBottom: Scale(10) }]}>
        <View style={{ flex: 1 }}>
          <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>Quiet hours</Text>
          <Text style={[commonStyles.fontSize10, { marginRight: Scale(50) }]}>Set hours when no notification will be received</Text>
        </View>
        <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
          <Image source={!!isEnabled ? imagePath.activeSwitch : imagePath.inActiveSwitch}
            style={commonStyles.switchBtnStyle} />
        </TouchableOpacity>
      </View>
      <ItemSeperator />

      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: Scale(20),marginBottom:verticalScale(10) }]}>From</Text>
        <View style={styles.timeContainer}>
          <DatePicker mode='time' date={date} onDateChange={setDate}
            is24hourSource={'device'}
            locale={'fr'}
            dividerHeight={0}
            style={{ height: 120 }}
            textColor={colors.black}
          />
        </View>

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: Scale(20), marginTop: verticalScale(30),bottom:verticalScale(-10) }]}>Till</Text>
        <View style={styles.timeContainer}>
          <DatePicker mode='time' date={date} onDateChange={setDate}
            is24hourSource={'device'}
            locale={'fr'}
            dividerHeight={0}
            style={{ height: 110 }}
            textColor={colors.black}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default QuietHours

const styles = StyleSheet.create({
  timeContainer: {
    borderColor: colors.borderColor
    , borderWidth: 1,
    borderRadius: 7,
    paddingVertical: verticalScale(10),
    paddingHorizontal: Scale(30)
  }
})