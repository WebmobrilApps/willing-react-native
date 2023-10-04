import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screensNames from '../constants/screensNames';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import Login from '../screens/Auth/Login/Login';
import VerificationCode from '../screens/Auth/Verification/VerificationCode';
import Welcome from '../screens/Auth/Welcome/Welcome';
import Scale from '../styles/Scale';



const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = (props) => {
  return (
    <AuthStack.Navigator
      initialRouteName={screensNames.splash}
      headerMode="none"
      screenOptions={{
        animation:'none',
        headerShown: false,
        gestureEnabled: true,
        headerShadowVisible: false,
        gestureDirection: 'vertical',
        headerTintColor: colors.black,
        headerTitleStyle:{
          fontFamily:fontFamily.medium,
          fontSize:Scale(20)
        },
        headerBackTitleStyle: {
          fontFamily: fontFamily.bold,
          fontSize:Scale(20)
        },
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <AuthStack.Screen name={screensNames.login} component={Login} />
      <AuthStack.Screen name={screensNames.verifyOtp} component={VerificationCode} />
      <AuthStack.Screen name={screensNames.welcomeScreen} component={Welcome} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;