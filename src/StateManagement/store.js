import thunkMiddleware from 'redux-thunk';
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // this is for debugging with React-Native-Debugger, you may leave it out
import {loginReducer } from '../StateManagement/loginData/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const rootReducer = combineReducers({

  loginReducer: loginReducer,
  // LoginMail:LoginMail,
  // FirstEmailloginReducer,FirstEmailloginReducer,
 


});
// const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = legacy_createStore(rootReducer,applyMiddleware(thunkMiddleware))
// export const persistor = persistStore(store)
// export const store = createStore(
  
//   rootReducer,
//  /*  composeWithDevTools *//* ( */applyMiddleware(thunkMiddleware)/* ) */
// );