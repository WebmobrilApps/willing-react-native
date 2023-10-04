import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../styles/commonStyles'
import { useNavigation } from '@react-navigation/native'
import Scale from '../../styles/Scale'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'
import ItemSeperator from '../../components/ItemSeperator'
import DatePicker from 'react-native-date-picker'


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
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: Scale(20) }]}>From</Text>
        <DatePicker mode='time' date={date} onDateChange={setDate}
          is24hourSource={'device'}
          locale={'fr'}
          dividerHeight={0}
          style={{ height: 120 }}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: Scale(20) }]}>To</Text>
        <DatePicker mode='time' date={date} onDateChange={setDate}
          is24hourSource={'device'}
          locale={'fr'}
          dividerHeight={0}
          style={{ height: 110 }}
        />
      </View>
    </SafeAreaView>
  )
}

export default QuietHours