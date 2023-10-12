import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import { googleApiKey } from '../../../constants/constants';


const AutoComplete = (props) => {
  const {
    onPress,
    placeholder,
    closeInput,
    btnIsDisable,
    boxStyle,
    onChangeText,
    cancelFocus,
    alignFromStrage,
    initValue,
  } = props;
  let inputRef = useRef();


  const onLocationPress = (
    data,
    details,
  ) => {
      console.log('here');
    let coords = {
      lat: details?.geometry?.location?.lat || 0,
      lng: details?.geometry.location.lng || 0,
    };
    onPress && onPress(coords);
  };

  const params = {
    google: {
      ref: (re) => (inputRef = re),
      minLength: 2,
      numberOfLines: 4,
      placeholder,
      enablePoweredByContainer:false,
      onFail: (e) => {
        console.log(e);
        btnIsDisable && btnIsDisable();
      },
      onPress: (data, detail = null) => {
        if (onChangeText) {
          onChangeText(data.description);
        } else {
          onLocationPress(data, detail);
        }
      },
      renderRow: (data) => renderLocationRow(data),
      query: {key: googleApiKey, language: 'iw', },
      debounce: 200,
      // styles: {
      //   container: [styles.container, boxStyle],
      //   listView: styles.listView,
      //   row: styles.row,
      //   textInput:[ styles.textInput,{textAlign:alignFromStrage}],
      //   textInputContainer: [styles.textInputContainer, props.textInputProps],
      // },
    },
  };


  useEffect(() => {
    console.log('initValue', initValue);

    initValue && inputRef.setAddressText(initValue);
    !cancelFocus && inputRef.focus();
  }, [initValue]);
  // tuggle renderIcon
  return <GooglePlacesAutocomplete  {...params.google} />;
};

export default AutoComplete;

const styles = StyleSheet.create({
  container: {
    marginStart: 10,
  },
  textInputContainer: {
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
    // backgroundColor: '#ffffff',
    paddingVertical: 5,
    height:40
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    color: '#5d5d5d',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'rgba(5, 36, 100, 0.3)',
  },
  listView: {
    marginBottom: 20,
    maxHeight:260,
    minHeight:150,
    zIndex: 2,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  arrowIcon: {
    width: 15,
    height: 15,
    marginStart: 10,
    alignSelf: 'flex-end',
  },
  mapIcon: {
    width: 15,
    height: 15,
    marginStart: 10,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  xIcon: {
    width: 20,
    height: 20,
  },
  xTouch: {
    alignSelf: 'center',
  },
});
