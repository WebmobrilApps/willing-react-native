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


const Drawer = createDrawerNavigator();


const DrawerStack = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="WILLING"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: colors.white,
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
          fontSize: Scale(18)
        },
        headerStyle: {
          backgroundColor: colors.theme,
        },
        drawerStyle: {
          // borderRadius:Scale(20),
          // borderTopLeftRadius:0,
          // borderBottomLeftRadius:0
        }
      }}>
      <Drawer.Screen name="WILLING" component={TabsNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({
  filterIconStyle: {
    height: Scale(18),
    width: Scale(18),
  }
})
