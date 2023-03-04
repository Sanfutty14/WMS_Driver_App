// import * as t from './actionTypes';

import apiCall, {apiCallGet, apiCallPost} from '../apiCall';
import {useNavigation} from '@react-navigation/native';
import apiCall2 from '../apiCall2';
import {DashBoardActionTypes} from './actionTypes';
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

export const getTripDetails = (token) => async dispatch => {
  console.log('getTripDetails api calling ::::::::::111');
  // dispatch({type: t.expensesActionTypes.LOGIN});

  const response = await apiCall2(token).post(
    '/TripBasedDriverTripOrderDetails'
  );

  try {
    if (response.status == 200 || response.status == 201) {
      console.log(response.data);
      console.log('getTripDetails api calling ::::::::::222 Success');
      dispatch({
        type: DashBoardActionTypes.DASHBOARD_RESPONSES_SUCCESS,
        payload: response.data,
      });
    }
  } catch {
    console.log('getTripDetails api calling ::::::::::111 Error');
    if (err) {
      console.log(err.response.data);
      return dispatch({
        type: DashBoardActionTypes.DASHBOARD_RESPONSES_ERROR,
        payload: err.data,
      });
    }
  }
};

export const resetTripDetails = () => async dispatch => {
  console.log('resetTripDetails api calling ::::::::::111 ');
  // dispatch({type: t.expensesActionTypes.LOGIN});

  dispatch({
    type: DashBoardActionTypes.DASHBOARD_RESPONSES_RESET,
    
  });
};


