import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllPosts from '../screens/Home/Posts/AllPosts';
import MinePosts from '../screens/Home/Posts/MinePosts';
import RecentPosts from '../screens/Home/Posts/RecentPosts';
import colors from '../styles/colors';
import Scale, { verticalScale } from '../styles/Scale';
import fontFamily from '../styles/fontFamily';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, PermissionsAndroid, Platform } from 'react-native';
import commonStyles from '../styles/commonStyles';
import screensNames from '../constants/screensNames';
import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import strings from '../constants/lng/LocalizedString';

const Tab = createMaterialTopTabNavigator();

function TabsNavigation(props) {

    const [
        currentLongitude,
        setCurrentLongitude
      ] = useState('...');
      const [
        currentLatitude,
        setCurrentLatitude
      ] = useState('...');
      const [
        locationStatus,
        setLocationStatus
      ] = useState('');

      useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'This App needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);
    



      const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLocationStatus('You are Here');
    
            //getting the Longitude from the location json
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
            
            //Setting Longitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };
    
      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('You are Here');
    
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
    
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate(screensNames.newRequestMain)}
                    style={styles.newPostRequest}>
                    <Text style={[commonStyles.fontSize14, styles.plusIconText]}>+</Text>
                </TouchableOpacity>
                <Tab.Navigator
                    initialRouteName={strings.tabBar_requestsByLocation}
                    tabBarPosition='top'
                    screenOptions={{
                        swipeEnabled:false,
                        tabBarActiveTintColor: colors.tabBarActiveColor,
                        tabBarInactiveTintColor: colors.tabBarInActiveColor,
                        tabBarLabelStyle: { fontSize: Scale(12), fontFamily: fontFamily.medium },
                        tabBarStyle: { shadowColor: colors.white },
                        tabBarIndicatorStyle: { borderWidth: 1, borderColor: colors.theme },
                        tabBarItemStyle: {
                            shadowOpacity: 0,
                            shadowRadius: 0,
                        },
                    }}
                    sceneContainerStyle={{ backgroundColor: colors.white }}
                >
                <Tab.Screen name={strings.tabBar_requestsByRecent} component={RecentPosts} />
                <Tab.Screen name={strings.tabBar_requestsByLocation} component={AllPosts} />
                <Tab.Screen name={strings.tabBar_myRequests} component={MinePosts} />
                </Tab.Navigator>
            </View>
        </SafeAreaView>

    );
}

export default TabsNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }, newPostRequest: {
        height: Scale(41),
        width: Scale(41),
        borderRadius: Scale(41),
        backgroundColor: colors.theme,
        position: 'absolute',
        bottom: '3%',
        right: '6%',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, plusIconText: {
        color: colors.white,
        fontSize: Scale(27),
        // textAlign: 'center',
        bottom:verticalScale(3)
    }
})