import { useSelector } from 'react-redux';
import {expensesActionTypes} from './actionTypes';
import { initialState } from '../InitialState/initialState';
// import * as t from './actionTypes';

export const ExpensesReducer = (state = initialState, {type, payload}) => {
  
  switch (type) {
    case expensesActionTypes.EXPENSES_RESPONSES:
      return {
        ...state,
        isLoading: true,
      };

    case expensesActionTypes.EXPENSES_RESPONSES_SUCCESS:
      return {...state, response: payload, isLoading: false};
    
      case expensesActionTypes.EXPENSES_RESPONSES_ERROR:
      return {...state, response: payload, isLoading: false};
      
    default:
      return state;
  }
};

export const ExpensesTypeReducer = (state = initialState, {type, payload}) => {
  
  switch (type) {
    case expensesActionTypes.EXPENSES_TYPE_RESPONSES:
      return {
        ...state,
        isLoading: true,
      };

    case expensesActionTypes.EXPENSES_TYPE_RESPONSES_SUCCESS:
      return {...state, response: payload, isLoading: false};
    
      case expensesActionTypes.EXPENSES_TYPE_RESPONSES_ERROR:
        return {...state, response: payload, isLoading: false};

        case expensesActionTypes.EXPENSES_TYPE_RESPONSES_RESET:
        return initialState;
    default:
      return state;
  }
};
