import { postRequest } from 'utils/http';

const BACKEND_API = 'https://api.digitoday.vn/api';

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
  
}
