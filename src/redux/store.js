import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userInfo','userType','langInfo'],
  timeout: null,
};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = null;
let persistor = null;
store = createStore(persistedReducer, applyMiddleware(...middleware))
persistor = persistStore(store);
export default store;