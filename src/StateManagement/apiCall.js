import axios from 'axios';
import { API_URL } from '../../config';
import { useSelector } from 'react-redux';
export default () => {
  // const loginData = useSelector(state => state.loginReducer);
  return axios.create({
    baseURL: `${API_URL}`,
    headers: {
      WMS_App: 'encryptedKey',
      // Authorization: `Bearer ${
      //   loginData.response.data.token
      // }`,
    },
  });
};

// export function apiCallGet(path,/* Tocken */) {
//   const Tocken ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDgyYWEwNTczMmQ2YmQ5NzA2MjY1NDM1YzU1NDU1NzQxNWVkZDVjYzRjN2U4YjZhNDExMWQwM2EyMjY5MGVmNjliMGE2MjA4ZDAwZjI4N2EiLCJpYXQiOjE2NjgxNDA4NzUuOTEzNDMzMDc0OTUxMTcxODc1LCJuYmYiOjE2NjgxNDA4NzUuOTEzNDM0MDI4NjI1NDg4MjgxMjUsImV4cCI6MTY5OTY3Njg3NS45MTAzMTI4OTEwMDY0Njk3MjY1NjI1LCJzdWIiOiI1OTMiLCJzY29wZXMiOltdfQ.r3L4MR1_Kt8nHer-T06Nw5ArESv-fsWkMR9pcmER8cw-ME7PTpRDqLPe_LQA7aes_yBG5izVjS7UNhXkSP8Zxnk1ubv4odM1ZFZd5RqmUH86D70ZkQU1ol9yYry7RkR4ithXTRnvbpcPtrjrdg_M3ZGQvmm2JNQgFFfgIPWJH7o-Y4-qwQXW4ZWheFGpHwBcv9KVbohuBX5jgFaW_1x3H_q_J5wo8IbRLdwBkdd9rYNapeUNUIDfjRHf_uBx1hDC0q9brSbTi5fGv55POwjFsrI-3ZdEA6fUSpGM1ZUowM3c1ZBcteg-64O5FCQwFJe94hYFPE-l6wdtRcpVBphruM0JJwjMMsBR2is4hil8XUtVnbW3oyQThVg8VQ-m-J918uZ0rjIDLMSpxb3YC8pIjgE7TcDkVFzR4OkPpF9JA07fE4nZcYx7fXpiThSVtl2Osp0Egt086R6Gmco9IsF_OzbqTv9ZAM_xZbiLQsqod-GA9RD-hdQ-DH_drY-e0pj-0woTzjzAq0VnPrDQVLTRXpXxmIh31wyUoGZfNqohHZHO2hLx8L9L62FFhuxQtmIcSM2VpxfAFiLi2YBpk11oV6F8bO58lZC8Evs-H-ZezvhCk5ZMA5KETXd0BR8r8EK0c5ZMFmYnWxJJh1Zs7_0K2zFrA-DIQrQMpEButDwrpwU"
//     const promise = axios.get(API_URL + path, /* InputData */ { headers: { "Authorization": `Bearer ${Tocken}`}})
//     const dataPromise = promise.then((response) => response)
//     return dataPromise
//   }
  
  
//   export function apiCallPost(Input, path, Tocken) {
//     const promise = axios.post(API_URL + path, Input, { headers: { "WMS_App": `encryptedKey`} })
//     // const promise = axios.post(API_URL + path, Input,)
//     const dataPromise = promise.then((response) => response)
  
//     return dataPromise
//   }
//   // var Header = {}}
//   //upload
//   export function apiCallUpload(inputData, path, Tocken) {
//     console.log(inputData)
//     const promise = axios.post(API_URL + path, inputData, { headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${Tocken}` } })
//     const dataPromise = promise.then((response) => response)
  
//     return dataPromise
//   }
  
  
  
//   // fetch(API+'/public/api/addFaultReport',{ method: 'POST' , body :body} )
  