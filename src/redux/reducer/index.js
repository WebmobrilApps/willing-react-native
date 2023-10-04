import { combineReducers } from 'redux'
import userInfo from './authReducer'
import langInfo from './languageReducer'
import userProfileReducer from './userProfileReducer'
import loaderReducer from './loaderReducer'
import checkInternet from './InternetReducer'
import splashReducer from './splashReducer'
import userType from './userTypeReducer'

const rootReducer = combineReducers(
    {
        userInfo,
        langInfo,
        userProfileReducer,
        loaderReducer,
        checkInternet,
        splashReducer,
        userType
    }
)

export default rootReducer