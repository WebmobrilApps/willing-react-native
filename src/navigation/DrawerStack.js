import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import TabsNavigation from './TabsNavigation';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import Scale from '../styles/Scale';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import screensNames from '../constants/screensNames';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import strings from '../constants/lng/LocalizedString';


const Drawer = createDrawerNavigator();

const DrawerStack = (props) => {
  const navigation = useNavigation()

  return (
    <Drawer.Navigator
      initialRouteName={strings.app_name_uppercase}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: colors.white,
        headerLeft: props => <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{marginLeft: Scale(18)}}>
          <Image source={imagePath.hamburgerMenuIcon} style={styles.filterIconStyle} />
        </TouchableOpacity>,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate(screensNames.filter)}
            style={{marginRight: Scale(18)}}>
              <Image source={imagePath.filterIcon} style={styles.filterIconStyle} />
            </TouchableOpacity>
          )
        },
        headerTitleStyle: {
          fontFamily: fontFamily.medium,
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: colors.theme,
        },
        drawerStyle: {
          // borderRadius:Scale(20),
          // borderTopLeftRadius:0,
          // borderBottomLeftRadius:0
          // height:'90%'
        }
      }}>
      <Drawer.Screen name={strings.app_name_uppercase} component={TabsNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({
  filterIconStyle: {
    height: Scale(20),
    width: Scale(20),
  }
})
