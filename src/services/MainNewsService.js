// import {data} from 'jquery';
import { postRequest } from 'utils/http1';

const BACKEND_API = 'https://api.digitoday.vn/api';

const baseURL = BACKEND_API;
export const checkType = function(contentType){
    return (contentType===1) ? 'Video' : (contentType===2) ? 'Tin ảnh' : 'Audio';
}
export const MainNewsService = {
    getnews: function (data, successCallback, failCallback) {
        const URL = `${baseURL}/getRelatedList`;
        return postRequest(URL, data, {}, successCallback, failCallback);
    },

    
}