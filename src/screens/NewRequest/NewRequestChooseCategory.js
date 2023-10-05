import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from '../../components/CustomBtn'
import styles from './styles';
import PostInformation from '../../utility/PostInformation';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const NewRequestChooseCategory = (props) => {

  const { setActivePage } = props;

  const [category, setCategory] = useState('')


  const chosenCategory = (categoryName) => {
    setCategory(categoryName)
  };

  const onNextBtnPress = () => {
    setActivePage(1);
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
              <Text style={[styles.categorylabel, { color: element.name == category ? colors.white : colors.txtColor }]}>
                {element.text}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    });
  };

  return (
    <View>
      <View style={commonStyles.newRequestChooseCategory}>{renderCategories()}</View>
      <CustomBtn
        btnStyle={{
          width: '70%',
          alignSelf: 'center',
          marginTop: '40%'
        }}
        callBack={onNextBtnPress}
        title={'Next'} />
    </View>
  )
}

export default NewRequestChooseCategory