// import * as t from './actionTypes';

import apiCall, {apiCallGet, apiCallPost} from '../apiCall';
import {useNavigation} from '@react-navigation/native';
import {expensesActionTypes} from './actionTypes';
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
  console.log('addExpenses api calling ::::::::::111' + JSON.stringify(data));
  // dispatch({type: t.expensesActionTypes.LOGIN});

  const response = await apiCall2(token).post(
    '/createDriverExpenseDetail',
    data,
  );

  try {
    if (response.status == 200 || response.status == 201) {
      console.log(response.data);
      console.log('addExpenses api calling ::::::::::222 Success');
     return dispatch({
        type: expensesActionTypes.EXPENSES_RESPONSES_SUCCESS,
        payload: response.data,
      });
    }
  } catch (err) {
    console.log('addExpenses api calling ::::::::::111 Error : : : ',err);
    if (err) {
      //console.log(err.response.data);
      return dispatch({
        type: expensesActionTypes.EXPENSES_RESPONSES_ERROR,
        payload: err.response.data,
      });
    }
  }
};

export const getExpenses = (token) => async dispatch => {
console.log('addExpenses api calling ::::::::::111');
  // dispatch({type: t.expensesActionTypes.LOGIN});

  const response = await apiCall2(token).get('/getDriverExpenseDetails');
 // console.log('addExpenses api calling ::::::::::222 response  '+JSON.stringify(response));
  try {
    //console.log('addExpenses api calling ::::::::::222 response  '+response);
    if (response.status == 200 || response.status == 201) {
      // console.log(response.data)
      console.log('Get Expenses api calling ::::::::::333 Success');
      return dispatch({
        type: expensesActionTypes.EXPENSES_RESPONSES_SUCCESS,
        payload: response.data,
      });
    }
  } catch (err){
    console.log('Get Expenses api calling ::::::::::111 Error ',err);
    if (err) {
      console.log(err.response.data);
      return dispatch({
        type: expensesActionTypes.EXPENSES_RESPONSES_ERROR,
        payload: err.data,
      });
    }
  }
};

export const getExpensesType = token => async dispatch => {
  
  // dispatch({type: t.expensesActionTypes.LOGIN});
  
    const response = await apiCall2(token).get('/getExpenseTypelist');
   // console.log('addExpenses api calling ::::::::::222 response  '+JSON.stringify(response));
    try {
      //console.log('addExpenses api calling ::::::::::222 response  '+response);
      if (response.status == 200 || response.status == 201) {
        // console.log(response.data)
        console.log('addExpenses api calling ::::::::::222 Success');
        dispatch({
          type: expensesActionTypes.EXPENSES_TYPE_RESPONSES_SUCCESS,
          payload: response.data,
        });
      }
    } catch {
      console.log('addExpenses api calling ::::::::::111 Error');
      if (err) {
        console.log(err.response.data);
        return dispatch({
          type: expensesActionTypes.EXPENSES_TYPE_RESPONSES_ERROR,
          payload: err.data,
        });
      }
    }
  };
