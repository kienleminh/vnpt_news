import { postRequest } from 'utils/http';

const BACKEND_API = 'https://myvnpt-bk.vnptvas.com/mapi/services';

const baseURL = BACKEND_API;

export const UserService = {
  login: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/authen_msisdn`;
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
