import {data} from 'jquery';
import { postRequest } from 'utils/http';

const BACKEND_API = 'https://api.digitoday.vn/api';
// const BACKEND_API = 'https://apiquantri.vinaphoneplus.com.vn/api/APIForWebApp';

const baseURL = BACKEND_API;

export const UserService = {
  login: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/getRelatedList`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

  logout: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/authen_logout`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

  register: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/authen_register`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },
  //test apiquantri.vinaphoneplus.com.vn
  // mainnew: function (data, successCallback, failCallback){
  //   const URL = `${baseURL}/getListTotal`;
  //   return postRequest(URL, data, {}, successCallback, failCallback);
  // },
}
