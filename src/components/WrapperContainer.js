import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import imagePath from '../constants/imagePath';
import { SafeAreaView } from 'react-native-safe-area-context';

const WrapperContainer = ({
  children,
  statusBarColor = 'transparent',
  barStyle = "light-content",
  gradient,
  wrapperStyle
}) => {
  return (
    <View style={styles.container}>
      {!!gradient ?
        <ImageBackground source={imagePath.bgImage} style={[styles.container,wrapperStyle]}>
          <StatusBar barStyle={barStyle} translucent={true} backgroundColor={statusBarColor} />
          <SafeAreaView style={styles.container}>
            {children}
          </SafeAreaView>
        </ImageBackground>
        :
        <View style={{ flex: 1 }}>
          <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={statusBarColor} />
          <SafeAreaView style={[styles.container, wrapperStyle]}>
            {children}
          </SafeAreaView>
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default WrapperContainer;