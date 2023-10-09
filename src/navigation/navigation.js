import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import { useSelector } from 'react-redux'
import MainStackNavigator from './MainStack';
import colors from '../styles/colors';


const RootStackNavigation = props => {
  const token = useSelector((state) => state.userInfo.loginInfo)

  const MyTheme = {
    dark: false,
    colors: {
      primary: colors.theme,
      background: "rgba(237, 237, 237, 1)",
      card: colors.white,
      header: colors.theme,
      text: colors.black,
    },
  };



  return (
    <NavigationContainer theme={MyTheme} >
      {token ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default RootStackNavigation;
