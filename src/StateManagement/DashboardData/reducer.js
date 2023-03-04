import { useSelector } from 'react-redux';
import { initialState } from '../InitialState/initialState';
import {DashBoardActionTypes} from './actionTypes';

// import * as t from './actionTypes';

export const DashBoardReducer = (state = initialState, {type, payload}) => {
  
  switch (type) {
    case DashBoardActionTypes.DASHBOARD_RESPONSES:
      return {
        ...state,
        isLoading: true,
      };

    case DashBoardActionTypes.DASHBOARD_RESPONSES_SUCCESS:
      return {...state, response: payload, isLoading: false};
    
      case DashBoardActionTypes.DASHBOARD_RESPONSES_RESET:
        return initialState;

      case DashBoardActionTypes.DASHBOARD_RESPONSES_ERROR:
      return {...state, response: payload, isLoading: false};
      
    default:
      return state;
  }
};

// export const ExpensesTypeReducer = (state = initialState, {type, payload}) => {
  
//   switch (type) {
//     case DashBoardActionTypes.EXPENSES_RESPONSES:
//       return {
//         ...state,
//         isLoading: true,
//       };

//     case DashBoardActionTypes.EXPENSES_RESPONSES_SUCCESS:
//       return {...state, response: payload, isLoading: false};
//     default:
//       return state;
//   }
// };
