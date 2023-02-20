import { loginActionTypes } from './actionTypes';
import { initialState ,loginInitialData,FirstEmailInitialData} from './initialState';
// import * as t from './actionTypes';


export const loginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case loginActionTypes.LOGIN:
     
      return {
          ...state, isLoading: true
      };
      
    case loginActionTypes.LOGIN_SUCCESS:
      return {...state, response: payload, isLoading: false}
    default:
      return state;
  }
};


