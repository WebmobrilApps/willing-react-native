import { View, Text, SafeAreaView, Switch, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../styles/commonStyles'
import styles from './styles'
import Scale, { verticalScale } from '../../styles/Scale'
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import ItemSeperator from '../../components/ItemSeperator'
import screensNames from '../../constants/screensNames'
import { useNavigation } from '@react-navigation/native'

const Notifications = (props) => {
  const navigation = useNavigation()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  console.log('status', isEnabled);

  const data = [
    {
      id: 1,
      title: 'Location',
      subTitle: 'Distance of 7 km',
      screenName: screensNames.location
    },
    {
      id: 2,
      title: 'Category',
      subTitle: 'All categories',
      screenName: screensNames.category
    },
    {
      id: 3,
      title: 'Quiet hours',
      subTitle: '00 : 00-05:00',
      screenName: screensNames.quiteHours
    },
    {
      id: 4,
      title: 'Keywords',
      subTitle: 'Medicines, Vehicle breakdown',
      screenName: screensNames.keywords
    },
  ]

  const CommonComp = ({
    title,
    subTitle,
    onPress
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[commonStyles.flexView, { marginBottom: verticalScale(20) }]}>
        <View style={{ flex: 1, }}>
          <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>{title}</Text>
          <Text style={commonStyles.fontSize10}>{subTitle}</Text>
        </View>
        <Image source={imagePath.backIcon} style={[styles.rightArro, { transform: [{ rotate: '180deg' }] }]} />
      </TouchableOpacity>
    )
  }



  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <View style={commonStyles.mainContainer}>
        <View style={[commonStyles.flexView, { padding: Scale(20), alignItems: 'flex-start', paddingBottom: Scale(10) }]}>
          <View style={{ flex: 1 }}>
            <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium }]}>Enable notification</Text>
            <Text style={[commonStyles.fontSize10, { marginRight: Scale(50) }]}>Lorem ipsum dolor sit amet consectetur. Lobortis vitae
              sitsed mattis viverra hendrerit tempus. Ornarear ticufames
              rhoncus </Text>
          </View>
          <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
            <Image source={!!isEnabled ? imagePath.activeSwitch : imagePath.inActiveSwitch}
              style={commonStyles.switchBtnStyle} />
          </TouchableOpacity>
        </View>
        <ItemSeperator />
        <View style={{ padding: Scale(10), paddingHorizontal: Scale(20) }}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <CommonComp
                  onPress={() => navigation.navigate(item.screenName)}
                  title={item.title}
                  subTitle={item.subTitle} />
              )
            }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Notifications