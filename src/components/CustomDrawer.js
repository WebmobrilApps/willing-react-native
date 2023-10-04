import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Share
} from 'react-native';
import colors from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Scale, { verticalScale } from '../styles/Scale';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import screensNames from '../constants/screensNames';



const CustomDrawer = props => {
  const navigation = useNavigation()
  const shareAppContent = 'A social assistance app 👉🏻 *best that you take a look* 🤩\nA practical way to spread help requests *based on location,* such that someone in the area can see the request. Use it and share it 🙂🙏🏻\n\nLink to the app here 👇🏻👇🏻\nwww.willingapp.com\n\nInvited to download ⬇️ and share ➡️ with others to increase good ✨😇';


  const onShare = async (content) => {
    try {
      const result = await Share.share({
        message: content,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  const onTopicPress = (screenName) => {
    navigation.dispatch(DrawerActions.closeDrawer());
    if (screenName === "homePageMain") {
      props.navigation.push("homePageMain");
    } else {
      props.navigation.navigate(screenName);
    }
  }


  const onRateUsPress = () => {
    
  }

  const topicArr = [
    {
      id: 1,
      title: 'Home',
      image: imagePath.home,
      onPress: () => onTopicPress("WILLING"),
    },
    {
      id: 2,
      title: "Notifications",
      image: imagePath.notify,
      onPress: () => onTopicPress(screensNames.notification),
    },

    {
      id: 3,
      title: 'Share',
      image: imagePath.share,
      onPress: () => onShare(shareAppContent),
    },
    {
      id: 4,
      title: "Support/Feedback",
      image: imagePath.support,
      onPress: () => onTopicPress(screensNames.helpCenter),
    },
    {
      id: 5,
      title: "QnA",
      image: imagePath.qna,
      onPress: () => onTopicPress(screensNames.qna),
    },
    {
      id: 6,
      title: "Rate Us",
      image: imagePath.star,
      onPress: () => onRateUsPress(),
    },
    {
      id: 7,
      title: "Terms of use",
      image: imagePath.terms,
      onPress: () => onTopicPress(screensNames.terms),
    },
    {
      id: 8,
      title: "About",
      image: imagePath.about,
      onPress: () => onTopicPress(screensNames.about),
    },
  ]

  const renderTopic = (arr = []) => {
    return arr?.map((topic) => (
      <TouchableOpacity  onPress={topic.onPress}
       key={topic.id}
        style={[styles.linkBox,{borderTopColor: topic.id == 1 ? colors.borderColor: null,borderTopWidth:topic.id == 1 ? 1 :null}]}>
        <Image source={topic.image} style={styles.imgStyle}/>
        <Text style={[commonStyles.fontSize14,{color:colors.black}]}>{topic.title}</Text>
      </TouchableOpacity
      >
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={imagePath.logo} style={styles.logoStyle} />
        <View style={styles.drawerItemContainer}>
          {renderTopic(topicArr)}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
  }, logoStyle: {
    height: Scale(90),
    width: Scale(90),
    alignSelf: 'center',
    margin: Scale(20),
    resizeMode:'contain'
  }, drawerItemContainer: {
    flex: 1
  }, linkBox: {
    flexDirection:'row',
    alignItems:'center',
    padding:Scale(15),
    paddingLeft:Scale(20),
    borderBottomColor:colors.borderColor,
    borderBottomWidth:1,
  },imgStyle:{
    height:Scale(22),
    width:Scale(22),
    marginRight:Scale(20),
    resizeMode:'contain'
  }
})
