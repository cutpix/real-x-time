import * as types from './action.types';
import axios from 'axios';
import {
  beginAjaxCall,
  ajaxCallError
} from './ajax.status.actions';


export function userSignupRequestSuccess() {
  return {
    type: types.USER_SIGNUP_REQUEST_SUCCESS
  };
}

export function loadExternalLoginsSuccess(externalLogins) {
  return {
    type: types.LOAD_EXTERNAL_LOGINS,
    externalLogins
  };
}


const config = {
  baseURL: 'http://localhost:7775/'
};

const clientHost = 'http://localhost:3000';

// thunks
export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/account/signup', userData, config)
      .then(response => {
        dispatch(userSignupRequestSuccess());
      }).catch(error => {
        throw (error);
      });
  };
}

export function externalSignupRequest(url) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
}

export function loadLoginProviders() {
  return dispatch => {
    return axios.get('/api/account/external-logins?returnUrl=' + clientHost, config)
      .then(res => {
        dispatch(loadExternalLoginsSuccess(res.data));
      });
  };
}