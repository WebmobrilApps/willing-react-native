import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import RootStackNavigation from './src/navigation/navigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { I18nManager, StatusBar } from 'react-native'
import colors from './src/styles/colors'
import LoadingUtil from './src/utility/LoadingUtil'
import strings from './src/constants/lng/LocalizedString'
import { getCountry } from 'react-native-localize'

const App = () => {
  console.log('get language', getCountry());

  useEffect(() => {
    strings.setLanguage('he')
    I18nManager.forceRTL(false)
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
  }, [])


  return (
    <Provider store={store}>
      <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={colors.theme} />
      <LoadingUtil />
      <RootStackNavigation />
    </Provider>
  )
}

export default App