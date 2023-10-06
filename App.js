import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import RootStackNavigation from './src/navigation/navigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { I18nManager, StatusBar } from 'react-native'
import colors from './src/styles/colors'
import LoadingUtil from './src/utility/LoadingUtil'
import { ConsoleLog } from './src/utility/helperFunction'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  ConsoleLog('locale',I18nManager.getConstants().localeIdentifier)


  return (
    <Provider store={store}>
    <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={colors.theme} />
    <LoadingUtil />
      <RootStackNavigation />
    </Provider>
  )
}

export default App