import React from 'react';
import screensNames from '../constants/screensNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import fontFamily from '../styles/fontFamily';
import Scale from '../styles/Scale';
import NewRequestMain from '../screens/NewRequest/NewRequestMain';
import colors from '../styles/colors';
import Filter from '../screens/Home/Filter';
import BackIconComp from '../components/BackIconComp';
import Notifications from '../screens/SideMenu/Notifications';
import Support from '../screens/SideMenu/Support';
import Terms from '../screens/SideMenu/Terms';
import About from '../screens/SideMenu/About';
import QnA from '../screens/SideMenu/QnA';
import PostDetails from '../screens/Home/PostDetails/PostDetails';
import Location from '../screens/LocationFilterScreens/Location';
import Category from '../screens/LocationFilterScreens/Category';
import QuietHours from '../screens/LocationFilterScreens/QuietHours';
import Keyword from '../screens/LocationFilterScreens/Keyword';
import { useSelector } from 'react-redux';
import Welcome from '../screens/Auth/Welcome/Welcome';
import ContactList from '../screens/NewRequest/ContactList';



const Stack = createNativeStackNavigator();


const MainStackNavigator = () => {

  const token = useSelector((state) => state.userInfo.loginInfo)
  const userType = useSelector((state) => state.userType.userType)
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
        headerShown: true,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTintColor: colors.white,
        headerLeft: () => {
          return (
            <BackIconComp />
          )
        },
        headerTitleStyle: {
          fontSize: 18,
          fontFamily: fontFamily.medium,
        },
        headerStyle: {
          backgroundColor: colors.theme
        }
      }}>
      {!!userType && token ? <>
        <Stack.Screen name="homePageMain" component={DrawerStack} options={{ headerShown: false }} />
        <Stack.Screen name={screensNames.newRequestMain} component={NewRequestMain} />
        <Stack.Screen name={screensNames.filter} component={Filter} />
        <Stack.Screen name={screensNames.postDetails} component={PostDetails} />
        <Stack.Screen name={screensNames.notification} component={Notifications} />
        <Stack.Screen name={screensNames.helpCenter} component={Support} />
        <Stack.Screen name={screensNames.terms} component={Terms} />
        <Stack.Screen name={screensNames.about} component={About} />
        <Stack.Screen name={screensNames.qna} component={QnA} />
        <Stack.Screen name={screensNames.location} component={Location} />
        <Stack.Screen name={screensNames.category} component={Category} />
        <Stack.Screen name={screensNames.quiteHours} component={QuietHours} />
        <Stack.Screen name={screensNames.keywords} component={Keyword} />
        <Stack.Screen name={screensNames.contactList} component={ContactList} />
      </>
        : <Stack.Screen name={screensNames.welcomeScreen} component={Welcome} options={{ headerShown: false }} />
      }

    </Stack.Navigator>
  );
};

export default MainStackNavigator;
