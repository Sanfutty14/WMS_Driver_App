// import * as t from './actionTypes';

import apiCall, {apiCallGet, apiCallPost} from '../apiCall';
import {useNavigation} from '@react-navigation/native';
import {notificationActionTypes} from './actionTypes';
import apiCall2 from '../apiCall2';
import AsyncStorage from '@react-native-async-storage/async-storage';
// after Relogin set Data to store

export const getNotification = (data,token) => async dispatch => {
  // dispatch({type: t.notificationActionTypes.LOGIN});

  const response = await apiCall2(token).post('/getDriverNotificationDetails',data);

  try {
    if (response.status == 200 || response.status == 201) {

      console.log('getNotification api calling ::::::::::222',response.data);
      dispatch({
        type: notificationActionTypes.NOTIFICATION_RESPONSES_SUCCESS,
        payload: response.data,
      });
    }
  } catch {
    console.log('getNotification api calling ::::::::::111 Error');
    if (err) {
      console.log('getNotification :',err.response.data);
      return dispatch({
        type: notificationActionTypes.NOTIFICATION_RESPONSES_ERROR,
        payload: err.data,
      });
    }
  }
};
