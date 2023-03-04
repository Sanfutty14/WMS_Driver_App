// import * as t from './actionTypes';

import apiCall, {apiCallGet, apiCallPost} from '../apiCall';
import {useNavigation} from '@react-navigation/native';
import {deliveredActionTypes} from './actionTypes';
import apiCall2 from '../apiCall2';
import AsyncStorage from '@react-native-async-storage/async-storage';
// after Relogin set Data to store



export const changeOrderStatus = (data, token) => async dispatch => {
  console.log('changeOrderStatus api calling ::::::::::111' + JSON.stringify(data));
  // dispatch({type: t.deliveredActionTypes.LOGIN});

  const response = await apiCall2(token).post(
    '/driverChangeOrderStatus',
    data,
  );

  try {
    if (response.status == 200 || response.status == 201) {
      console.log(response.data);
      console.log('changeOrderStatus api calling ::::::::::222 Success '+response);
      dispatch({
        type: deliveredActionTypes.DELIVERED_RESPONSES_SUCCESS,
        payload: response.data,
      });
    }
  } catch {
    console.log('changeOrderStatus api calling ::::::::::111 Error');
    if (err) {
      console.log("Error IS "+err.response.data);
      return dispatch({
        type: deliveredActionTypes.DELIVERED_RESPONSES_ERROR,
        payload: err.data,
      });
    }
  }
};



