// import * as t from './actionTypes';

import apiCall, {apiCallGet, apiCallPost} from '../apiCall';
import {useNavigation} from '@react-navigation/native';
import {loginActionTypes} from './actionTypes';
import apiCall2 from '../apiCall2';
import AsyncStorage from '@react-native-async-storage/async-storage';
// after Relogin set Data to store

export const ReLogin = (setDAta, setDAta2) => {
  console.log('setDAta', setDAta, setDAta2);
  return dispatch => {
    dispatch(setReLoginState(setDAta, setDAta2));
  };
};

const setReLoginState = (data, data2) => {
  console.log(data, data2);
  return {
    type: t.SET_LOGIN_STATE,
    payload: data,
    payload2: data2,
  };
};

export const addExpenses = (data, token) => async dispatch => {
  console.log('login api calling ::::::::::111'+JSON.stringify(data));
  // dispatch({type: t.loginActionTypes.LOGIN});
  
  const response = await apiCall2(token)
    .post('/createDriverExpenseDetail', data)
    
    try{
      if (response.status == 200 || response.status == 201) {
        console.log(response.data)
        console.log('login api calling ::::::::::222 Success');
      dispatch({type: loginActionTypes.LOGIN_SUCCESS, payload: response.data});
      }
    }
    catch{
           console.log('login api calling ::::::::::111 Error');
      if (err) {
        console.log(err.response.data);
        return dispatch({
          type: loginActionTypes.LOGIN_ERROR,
          payload: err.data,
        });
      }
    }
  //   .catch(err => {
  //     console.log('login api calling ::::::::::111 Error');
  //     if (err) {
  //       console.log(err.response.data);
  //       return dispatch({
  //         type: loginActionTypes.LOGIN_ERROR,
  //         payload: err.data,
  //       });
  //     }
  //   });

  // if (response.status === 200) {

  //   console.log('login api calling ::::::::::222 Success');
  //   dispatch({type: loginActionTypes.LOGIN_SUCCESS, payload: response.data});

  // }
};
