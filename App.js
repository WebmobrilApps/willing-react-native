import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import RootStackNavigation from './src/navigation/navigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { StatusBar } from 'react-native'
import colors from './src/styles/colors'
import LoadingUtil from './src/utility/LoadingUtil'

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    },3000)
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