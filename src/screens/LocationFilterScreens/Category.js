import { Image, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'
import Scale, { verticalScale } from '../../styles/Scale'
import PostInformation from '../../utility/PostInformation'
import colors from '../../styles/colors'

const Category = (props) => {
    const [category, setCategory] = useState('')

    const chosenCategory = (categoryName) => {
        setCategory(categoryName)
      };


    const renderCategories = () => {
        return PostInformation.categoryType.map((element, i) => {
          return (
            <View key={i} style={[commonStyles.categoryButton, { backgroundColor: element.name == category ? colors.theme : colors.white }]}>
              <TouchableWithoutFeedback
                onPress={() =>
                  chosenCategory(element.name)
                }
              >
                <View style={[commonStyles.categoryBox,]}>
                  <Image source={element.src} style={[commonStyles.ctegoryImg, { tintColor: element.name == category ? colors.white : 'rgba(167, 167, 167, 1)' }]} />
                  <Text style={[commonStyles.categorylabel, { color: element.name == category ? colors.white : colors.txtColor,marginTop:verticalScale(10),textAlign:'center' }]}>
                    {element.text}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        });
      };

  return (
    <SafeAreaView style={commonStyles.mainContainer}>
        <View style={[commonStyles.mainContainer]}>
        <Text style={[commonStyles.fontSize12, { fontFamily: fontFamily.medium,margin:Scale(7),marginHorizontal:Scale(25),marginBottom:Scale(10) }]}>Choose about which categories you will want to get 
        notifications</Text>
        <View style={commonStyles.newRequestChooseCategory}>{renderCategories()}</View>
        </View>
    </SafeAreaView>
  )
}

export default Category