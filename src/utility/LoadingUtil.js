import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, ActivityIndicator, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';
const LoadingUtil = (props) => {
  const loaderVisibility = useSelector((state) => state.loaderReducer.loader)
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loaderVisibility}
      statusBarTranslucent={true}
      onRequestClose={() => { 
        // console.log("modal close")
       }}>
      <TouchableWithoutFeedback onPress={() => null} style={{ flex: 1 }} >
        <View style={styles.container}>
          <View style={styles.visible_container}>
            <ActivityIndicator size={'large'} color={colors.black} />
          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(22,22,22,0.4)",
    justifyContent: 'center',
    alignItems: 'center'
  },
  visible_container: {
    width: '30%',
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default LoadingUtil;