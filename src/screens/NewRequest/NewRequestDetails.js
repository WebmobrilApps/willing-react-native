import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from '../../components/CustomBtn';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import Scale, { verticalScale } from '../../styles/Scale';
import AppTextInput from '../../components/AppTextInput';
import TextInputComp from '../../components/TextInputComp';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import SliderCompWhen from '../../components/SliderCompWhen';
import MapViewModal from '../../components/Modal/MapViewModal';
import { Dropdown } from 'react-native-element-dropdown';
import SliderCompRadius from '../../components/SliderCompRadius';
const {height} = Dimensions.get('window')

const NewRequestDetails = (props) => {
console.log(props)
  const {
    setActivePage,
  } = props;

  const { address, setAddress, setPlaceId } = props;


  const [postDetailsRadius, setPostDetailsRadius] = useState(
    0
  );
  const [postDetailsExpiry, setPostDetailsExpiry] = useState(
    0
  );
  const [postDetailsExpireDate, setPostDetailsExpireDate] = useState(
    0
  );
  const [modal, setModal] = useState(false)
  const [urgency, setUrgency] = useState('')

  const hideMapModal = () => {
    setModal(false);
  };

  const onNextBtnPress = () => {
    setActivePage(2);
  };

  const params = {
    sliderWhere: {
      postDetailsRadius: postDetailsRadius,
      setPostDetailsRadius: setPostDetailsRadius
    },
    sliderWhen: {
      postDetailsRadius: postDetailsExpiry,
      setPostDetailsRadius: setPostDetailsExpiry
    },
  }

  const urgencyLevel = [
    {
      id: 1,
      lable: "Not urgent",
    },
    {
      id: 2,
      lable: "Moderate",
    },
    {
      id: 3,
      lable: "Serious",
    },
    {
      id: 4,
      lable: "Critical",
    },
    {
      id: 5,
      lable: "Life threatening",
    },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.renderItem}>
        <Text style={[commonStyles.fontSize14, { margin: Scale(5) }]}>
          {item.lable}{" "}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    {modal && (
      <Modal>
        <MapViewModal
          alignFromStrage={props.alignFromStrage}
          address={address}
          setAddress={setAddress}
          hideMapModal={hideMapModal}
          setPlaceId={setPlaceId}
        />
      </Modal>
    )}
    <ScrollView style={{height:height/1.42}}
    showsVerticalScrollIndicator={false}>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Please fill the below details:</Text>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: verticalScale(10) }]}>Description</Text>
      <TextInputComp
        multiline={true}
      />
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Image</Text>
      <TouchableOpacity style={{ marginTop: verticalScale(10) }}>
        <Image source={imagePath.plusIcon} style={styles.plusImgStyle} />
      </TouchableOpacity>
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium, marginVertical: verticalScale(10) }]}>Location-Default Current</Text>
      <TouchableOpacity onPress={() => setModal(true)}>
      <AppTextInput editable={false} location appTxtInputStyle={{ width: '100%', marginBottom: verticalScale(10) }} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
            <Text
              style={[
                commonStyles.fontSize14,
                {
                  fontFamily: fontFamily.medium,
                  marginBottom: verticalScale(10),
                },
              ]}
            >
              Urgency Level
            </Text>
            <Dropdown
              style={[commonStyles.dropdown, {}]}
              renderRightIcon={() => (
                <Image
                  source={imagePath.dropDownIcon}
                  style={{ height: 12, width: 12, resizeMode: "contain" }}
                />
              )}
              placeholderStyle={commonStyles.placeholderStyle}
              selectedTextStyle={commonStyles.selectedTextStyle}
              inputSearchStyle={commonStyles.inputSearchStyle}
              iconStyle={commonStyles.iconStyle}
              containerStyle={commonStyles.containerStyle}
              itemContainerStyle={commonStyles.itemContainerStyle}
              itemTextStyle={commonStyles.fontSize12}
              data={urgencyLevel}
              selectedTextProps={{
                numberOfLines: 1,
              }}
              // maxHeight={300}
              renderItem={renderItem}
              labelField="lable"
              valueField="id"
              imageField="image"
              placeholder={"Urgency Level"}
              searchPlaceholder="Search..."
              value={urgency}
              onChange={(item) => {
                setUrgency(item);

                // setIsFocus(false);
              }}
            />
          </View>

      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>Until when to post?</Text>
      <SliderCompRadius
        postDetailsExpireDate={postDetailsExpireDate}
        setPostDetailsExpireDate={setPostDetailsExpireDate}
      />
      <Text style={[commonStyles.fontSize14, { fontFamily: fontFamily.medium }]}>What radius from the location should be posted?</Text>
      <SliderCompWhen {...params.sliderWhere} />

      </ScrollView>
        <CustomBtn title={'NEXT'}
        btnStyle={{ width: '70%', alignSelf: 'center', }}
        callBack={() => props.onClick(2)}
       />
    </View>

  )
}

export default NewRequestDetails

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: Scale(20)
  }, plusImgStyle: {
    height: Scale(38),
    width: Scale(38),
    resizeMode: 'contain'
  }
})