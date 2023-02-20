// import * as t from './actionTypes';

import apiCall, { apiCallGet, apiCallPost } from '../apiCall'
import {useNavigation} from '@react-navigation/native';
import { loginActionTypes } from './actionTypes';

// after Relogin set Data to store


export const ReLogin = (setDAta,setDAta2) => {
  console.log("setDAta",setDAta,setDAta2)
  return (dispatch) => {
            dispatch(setReLoginState(setDAta,setDAta2));
  }
};



const setReLoginState = (data, data2) => {
console.log(data,data2)
  return {
    type: t.SET_LOGIN_STATE,
    payload: data,
    payload2: data2,
  };
};

export const postLogin = (data) => async(dispatch) => {
  console.log("login api calling ::::::::::111");
  // dispatch({type: t.loginActionTypes.LOGIN});
  const response = await apiCall().post('/mdriverLogin',data).catch(err => {
    if(err){
      return dispatch({type: loginActionTypes.LOGIN_ERROR,payload: err.data})
    }
  })
  
  if(response.status === 200){
    // 

    console.log("login api calling ::::::::::222 Success");
    dispatch({type: loginActionTypes.LOGIN_SUCCESS, payload: response.data       });
    // const navigation = useNavigation();
    // navigation.navigate('DrawerPage');
  }

}






























