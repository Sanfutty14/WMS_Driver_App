import { useSelector } from 'react-redux';
import {deliveredActionTypes} from './actionTypes';
import {
  initialState,
  loginInitialData,
  FirstEmailInitialData,
} from './initialState';
// import * as t from './actionTypes';

export const DeliveredReducer = (state = initialState, {type, payload}) => {
  
  switch (type) {
    case deliveredActionTypes.DELIVERED_RESPONSES:
      return {
        ...state,
        isLoading: true,
      };

      case deliveredActionTypes.DELIVERED_RESPONSES_SUCCESS:
      return {...state, response: payload, isLoading: false};
    
      case deliveredActionTypes.DELIVERED_RESPONSES_ERROR:
      return {...state, response: payload, isLoading: false};
      
    default:
      return state;
  }
};