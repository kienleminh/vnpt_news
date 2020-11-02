import {data} from 'jquery';
import { postRequest } from 'utils/http';

const BACKEND_API = 'https://api.digitoday.vn/api';

const baseURL = BACKEND_API;

export const MainNewsService = {
    getnews: function (data, successCallback, failCallback) {
        const URL = `${baseURL}/getRelatedList`;
        return postRequest(URL, data, {}, successCallback, failCallback);
    },

    
}