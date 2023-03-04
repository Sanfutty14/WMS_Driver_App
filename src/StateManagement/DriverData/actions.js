// import * as t from './actionTypes';

import apiCall, {apiCallGet, apiCallPost} from '../apiCall';
import {useNavigation} from '@react-navigation/native';
import {driverActionTypes} from './actionTypes';
import apiCall2 from '../apiCall2';
import AsyncStorage from '@react-native-async-storage/async-storage';
// after Relogin set Data to store

export const getDriverDetails = token => async dispatch => {
  // dispatch({type: t.driverActionTypes.LOGIN});

  const response = await apiCall2(token).post('/driverProfile');

  try {
    if (response.status == 200 || response.status == 201) {
      console.log(response.data);
      console.log('changeOrderStatus api calling ::::::::::222 Success');
      dispatch({
        type: driverActionTypes.DRIVER_RESPONSES_SUCCESS,
        payload: response.data,
      });
    }
  } catch {
    console.log('changeOrderStatus api calling ::::::::::111 Error');
    if (err) {
      console.log(err.response.data);
      return dispatch({
        type: driverActionTypes.DRIVER_RESPONSES_ERROR,
        payload: err.data,
      });
    }
  }
};
