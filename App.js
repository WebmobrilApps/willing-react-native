import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import RootStackNavigation from './src/navigation/navigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { I18nManager, StatusBar } from 'react-native'
import colors from './src/styles/colors'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={colors.theme} />
      <RootStackNavigation />
    </Provider>
  )
}

export default App