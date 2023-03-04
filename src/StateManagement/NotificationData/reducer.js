import { useSelector } from 'react-redux';
import {notificationActionTypes} from './actionTypes';
import {
  initialState,
  loginInitialData,
  FirstEmailInitialData,
} from '../InitialState/initialState';
// import * as t from './actionTypes';

export const NotificationDataReducer = (state = initialState, {type, payload}) => {
  
  switch (type) {
    case notificationActionTypes.NOTIFICATION_RESPONSES:
      return {
        ...state,
        isLoading: true,
      };

      case notificationActionTypes.NOTIFICATION_RESPONSES_SUCCESS:
      return {...state, response: payload, isLoading: false};
    
      case notificationActionTypes.NOTIFICATION_RESPONSES_ERROR:
      return {...state, response: payload, isLoading: false};
      
    default:
      return state;
  }
};