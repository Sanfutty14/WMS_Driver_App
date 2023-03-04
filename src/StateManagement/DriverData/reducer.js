import { useSelector } from 'react-redux';
import {driverActionTypes} from './actionTypes';
import {
  initialState,
  loginInitialData,
  FirstEmailInitialData,
} from '../InitialState/initialState';
// import * as t from './actionTypes';

export const DriverDataReducer = (state = initialState, {type, payload}) => {
  
  switch (type) {
    case driverActionTypes.DRIVER_RESPONSES:
      return {
        ...state,
        isLoading: true,
      };

      case driverActionTypes.DRIVER_RESPONSES_SUCCESS:
      return {...state, response: payload, isLoading: false};
    
      case driverActionTypes.DRIVER_RESPONSES_ERROR:
      return {...state, response: payload, isLoading: false};
      
    default:
      return state;
  }
};