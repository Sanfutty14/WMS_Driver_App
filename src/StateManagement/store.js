import thunkMiddleware from 'redux-thunk';
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // this is for debugging with React-Native-Debugger, you may leave it out
import {loginReducer } from '../StateManagement/loginData/reducer';
import {ExpensesReducer,ExpensesTypeReducer } from '../StateManagement/ExpensesData/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DashBoardReducer } from './DashboardData/reducer';
import {DriverDataReducer} from './DriverData/reducer';
import { DeliveredReducer } from './DeliveredData/reducer';
import { NotificationDataReducer } from './NotificationData/reducer';

// import { persistStore, persistReducer } from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const rootReducer = combineReducers({

  loginReducer: loginReducer,
  ExpensesReducer: ExpensesReducer,
  ExpensesTypeReducer:ExpensesTypeReducer,
  DashBoardReducer:DashBoardReducer,
  DriverDataReducer:DriverDataReducer,
  DeliveredReducer:DeliveredReducer,
  NotificationDataReducer:NotificationDataReducer,
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