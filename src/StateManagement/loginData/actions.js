// import * as t from './actionTypes';

import apiCall, { apiCallGet, apiCallPost } from '../apiCall'
import {useNavigation} from '@react-navigation/native';
import { loginActionTypes } from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiCall2 from '../apiCall2';
// after Relogin set Data to store


export const driverLogOut = () => async(dispatch) => {
  const token = await AsyncStorage.getItem("bearerToken");
  const response = await apiCall2(token).post('/logOutDriver').catch(err => {
    if(err){
      console.log("driverLogOut api calling ::::::::::111"+JSON.stringify(err.response.data));
      return dispatch({type: loginActionTypes.LOGIN_ERROR,payload: err.data})
    }
  })
  
  if(response.status === 200){
    await AsyncStorage.setItem("driverLoginStatus", response.data.message);
    console.log("driverLogOut api calling ::::::::::Success "+JSON.stringify(response.data.message));
    dispatch({type: loginActionTypes.LOGIN_RESET, payload: response.data});
   
  }

}

export const postLogin = (data) => async(dispatch) => {
  //console.log("login api calling ::::::::::111");
  // dispatch({type: t.loginActionTypes.LOGIN});
  const response = await apiCall().post('/mdriverLogin',data).catch(err => {
    if(err){
      console.log("login api calling ::::::::::111"+JSON.stringify(err.response.data));
      return dispatch({type: loginActionTypes.LOGIN_ERROR,payload: err.data})
    }
  })
  
  if(response.status === 200){
    console.log('Login data  ::: ',response);
    await AsyncStorage.setItem("bearerToken", response.data.data.token);
    await AsyncStorage.setItem("driverLoginStatus", response.data.message);
    console.log("login api calling ::::::::::222 Success :::  "+ await AsyncStorage.getItem("bearerToken"));
    dispatch({type: loginActionTypes.LOGIN_SUCCESS, payload: response.data});
    // const navigation = useNavigation();
    // navigation.navigate('DrawerPage');
  }

}






























