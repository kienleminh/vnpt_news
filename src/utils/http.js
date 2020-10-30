import axios from 'axios';
import cui from 'component/cui';
import sha256 from 'crypto-js/sha256';

function handleHttpError(error) {
  if (error.response && error.response.data) {
    return error.response.data.errorMessage || error;
  }

  return error;
}

// encodeURIComponent() will not encode: ~!*()'
function convertedEncodeSpecial(str) {
  if (!str) {
    return str;
  }
  str = str.replace(/~/g, '%7E');
  str = str.replace(/!/g, '%21');
  str = str.replace(/\*/g, '%2A');
  str = str.replace(/\(/g, '%28');
  str = str.replace(/\)/g, '%29');
  str = str.replace(/'/g, '%27');
  str = str.replace(/%20/g, "+");
  return str;
}

function serialize(obj) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    } 
  }
  let text = str.join('&');
  return convertedEncodeSpecial(text);
}

function transformConfig(config, data) {
  const copyConfig = cui.copy(config);	
  delete copyConfig.headers;	

  let body = '';
  if (cui.isUndefinedOrNull(data)) {
    body = serialize(copyConfig.params);
  } else {
    body = JSON.stringify(data);
  }
  const secureCode = '8fOXDEQdMb5Fmwze';	
  const requestTime = Date.now();	
  const md5Hex = require('md5-hex');
  const Channel = 'web';

  const authorization = sha256(md5Hex(`${body}#${secureCode}@${requestTime}!${Channel}`)).toString().toLowerCase();
  const headers = {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
    RequestTime: requestTime,	
    Authorization: authorization,
    Channel,
    ...config.headers,
  };

  config.headers = headers;
  return config;
}

function makeHttpRequest(apiCall, successCallBack, failCallBack, transformFunc) {
  return new Promise(async () => {
    try {
      const response = await apiCall();
      const responseData = response.data;
      const successResponse = cui.isFunction(transformFunc) ? transformFunc(responseData) : responseData;
      successCallBack(successResponse);
    } catch (e) {
      if (cui.isFunction(failCallBack)) {
        failCallBack(handleHttpError(e));
      }
    }
  });
}

export function getRequest(url, config = {}, successCallBack, failCallBack) {
  transformConfig(config);
  return makeHttpRequest(() => axios.get(url, config), successCallBack, failCallBack);
}

export function postRequest(url, data, config = {}, successCallBack, failCallBack, transformFunc) {
  transformConfig(config, data);
  return makeHttpRequest(() => axios.post(url, data, config), successCallBack, failCallBack, transformFunc);
}

export function putRequest(url, data, config = {}, successCallBack, failCallBack) {
  transformConfig(config);
  return makeHttpRequest(() => axios.put(url, data, config), successCallBack, failCallBack);
}

export function deleteRequest(url, data, config = {}, successCallBack, failCallBack) {
  transformConfig(config);
  return makeHttpRequest(() => axios.delete(url, data, config), successCallBack, failCallBack);
}
