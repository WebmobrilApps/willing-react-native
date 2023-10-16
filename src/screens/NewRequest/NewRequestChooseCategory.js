import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from '../../components/CustomBtn'
import styles from './styles';
import PostInformation from '../../utility/PostInformation';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { verticalScale } from '../../styles/Scale';
import strings from '../../constants/lng/LocalizedString';

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
              <Text style={[commonStyles.fontSize10, { color: element.name == category ? colors.white : colors.txtColor,marginTop:verticalScale(10),textAlign:'center' }]}>
                {element.text}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    });
  };

  return (
    <View style={[commonStyles.mainContainer,]}>
      <View style={[commonStyles.newRequestChooseCategory]}>{renderCategories()}</View>  
       <CustomBtn title={strings.next_uppercase}
      btnStyle={{ width: '60%', alignSelf: 'center',position:'absolute',bottom:0 }}
      callBack={()=>props.onClick(1)}
     />
    </View>
  )
}

export default NewRequestChooseCategory