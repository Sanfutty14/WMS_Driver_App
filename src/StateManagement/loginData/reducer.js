import { loginActionTypes } from './actionTypes';
import { initialState } from './initialState';
// import * as t from './actionTypes';


export const loginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case loginActionTypes.LOGIN:
     
      return {
          ...state, isLoading: true
      };
      
    case loginActionTypes.LOGIN_SUCCESS:
      return {...state, response: payload, isLoading: false}
    case loginActionTypes.LOGIN_RESET:
      return initialState;
      case loginActionTypes.LOGIN_ERROR:
        return {...state, response: payload, isLoading: false}
    default:
      return state;
  }
};


