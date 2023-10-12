import { Platform } from "react-native"

export const googleApiKey="AIzaSyDkmvvlB2xbv4OxuU22nJii5dDCCsZUm9M"
export const isIOS= () => {
    return Platform.OS === 'ios' 
  }

  export const IS_IOS = Platform.OS === 'ios';

//   export default {isIOS}  