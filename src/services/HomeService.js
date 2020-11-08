import {postRequest} from 'utils/http';
import cui from 'component/cui';

const BACKEND_API = 'https://digitoday.vn/';
const baseURL = BACKEND_API;

const transformCateList = function (response) {
    const cateList = response.data;
    cui.each(cateList, item => {
        // item.url = CommonService.changeAlias(item.name);
    });
    return cateList;
    };

    const convertedTime = function (myDate) {
    const millis = new Date(myDate).getTime();
    const currMillis = new Date().getTime();
    const val = currMillis - millis;

    const minute = 60000;
    if (val < minute) {
        return 'Mới đây';
    }

    if (val < 60 * minute) {
        return `${parseInt(val / (minute))} phút trước`;
    }

    const day = 86400000;
    if (val > 30*day) {
        return myDate;
    }
    if (val > day) {
        return `${parseInt(val / day)} ngày trước`;
    }
    if (val > 3600000) {
        return `${parseInt(val / 3600000)} giờ trước`;
    }

    return myDate;
    };

    const transformNewsList = function (response) {
    cui.each(response.data, item => {
        item.createTime = convertedTime(item.createTime);
        if (cui.has(item, 'replyComment')) {
        cui.each(item.replyComment, replyItem => {
            replyItem.createTime = convertedTime(replyItem.createTime);
        });
        }
    });
    return response;
};

export const HomeService = {
    getHome: function (params, successCallback, failCallback) {
    const URL = `${baseURL}`;
    return postRequest(URL, null, params, successCallback, failCallback, transformNewsList);
}
}