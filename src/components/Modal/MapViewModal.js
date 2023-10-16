import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, PermissionsAndroid } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { googleApiKey, isIOS } from "../../constants/constants";
import { getAddressByCoords } from "../../redux/actions";
import AutoComplete from "../../screens/NewRequest/autoComplete/AutoComplete";
import CustomBtn from "../CustomBtn";
import strings from "../../constants/lng/LocalizedString";

const MapViewModal = (props) => {
  const hideMapModal = props.hideMapModal;
  const isDeviceIOS = isIOS();
  const {address, setAddress} = props
  const [userCityId, setUserCityId] = useState();
  const [myRegion, SetMyRegion] = useState({
    latitude: 22.719568,
    longitude: 75.857727,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const params = {
    autoComplete: {
      placeholder: '',
      boxStyle: styles.box,
      value: address,
      // textInputProps: styles.textInputProps,
      onChangeText: (val) => props.setAddress(val),
      cancelFocus: true,
      initValue: address,
      pageName: "homePageMain",
      alignFromStrage: props.alignFromStrage,
    },
  };
  const findCityFromResults = (arr = []) => {
    let findByLocality = "locality";
    let city = arr?.find((result) => result?.types?.indexOf(findByLocality) > -1);
    return city
  };
  const findAddressByCoords = async (lat, lon) => {
    const latlng = lat.toString() + "," + lon.toString();
    let url = getAddressByCoords(latlng, googleApiKey);
    // let data = await axiosRequest(url, "get");
    // if (data?.results) {
    //   let userCity = findCityFromResults(data.results)
    //   console.log('my city', userCity);
    //   // how to save address hook
    //   let where = userCity ? userCity?.formatted_address : null
    //   let place_id = userCity ? userCity?.place_id : null

    //   // address && setAddress(address)
    //   place_id && setUserCityId(place_id)
    //   where && setAddress(where);
    // }
    // return undefined;
  };
  const updateUserLocation = (lat, lon) => {
    if (!lat || !lon) return;
    SetMyRegion({ ...myRegion, latitude: lat, longitude: lon });
    findAddressByCoords(lat, lon);
  };
  
  const updateContextWithAddress = async () => {
    userCityId && props.setPlaceId(userCityId);
   
    hideMapModal();
  };
  const findMyLocation = async () => {
    try {
      if (!isDeviceIOS) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            buttonPositive: "one",
            title: "Ridesharer Geolocation Permission",
            message:
              "Ridesharer needs access to your current location so you can share or search for a ride",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          navigator.geolocation?.getCurrentPosition(
            (info) =>
              updateUserLocation(info?.coords.latitude, info?.coords.longitude),
            (err) => {
              console.log("err no location", err);
              // userAdress && updateUserLocation(userAdress.addressCoords.lat, userAdress.addressCoords.lon)
            },
            {
              enableHighAccuracy: enableHighAccuracyToDevice(),
              timeout: 4000,
              maximumAge: 0,
            }
          );
        } else {
          console.log("Geolocation permission denied");
        }
      }
      //  if ios
      else {
        navigator.geolocation?.getCurrentPosition(
          (info) =>
            updateUserLocation(info?.coords.latitude, info?.coords.longitude),
          (err) => {
            console.log("err", err);
            // userAdress &&  updateUserLocation(userAdress.addressCoords.lat, userAdress.addressCoords.lon)
          },
          { enableHighAccuracy: false, timeout: 4000, maximumAge: 0 }
        );
      }
    } catch (err) {
      console.warn(err);
    }

    // goToCenterMap();
  };

  useEffect(() => {
    findMyLocation();
  }, []);
  return (
    <View style={styles.container}>
      <AutoComplete {...params.autoComplete} />
      <MapView
        scrollEnabled={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsMyLocationButton={true}
        showsUserLocation={true}
        mapPadding={isDeviceIOS ? { bottom: 50 } : { top: 60 }}
        onPress={(data) => {
          let lat = data?.nativeEvent?.coordinate?.latitude;
          let lon = data?.nativeEvent?.coordinate?.longitude;
          console.log("lat", lat);
          console.log("lon", lon);
          updateUserLocation(lat, lon);
        }}
        region={{
          latitude: myRegion.latitude,
          longitude: myRegion.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: myRegion?.latitude,
            longitude: myRegion?.longitude,
          }}
        />
      </MapView>
      <CustomBtn title={strings.location_setLocation}
      callBack={updateContextWithAddress}
      btnStyle={styles.btn}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btn: {
    position: "absolute",
    bottom: 40,
    width: "90%",
    marginHorizontal: "15%",
    // paddingVertical: 15,
    alignSelf:'center'
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
  box: {
    position: "absolute",
    top: 50,
    width: '100%',
    alignSelf: "center",
    zIndex: 1,
  },
});
export default MapViewModal;
