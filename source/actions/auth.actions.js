import * as types from './action.types';
import { beginAjaxCall, ajaxCallError } from './ajax.status.actions';

import axios from 'axios';


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

const config = {
  baseURL: 'http://localhost:7775/'
};

export function loadLoginProviders() {
  return dispatch => {
    return axios.get('/api/account/external-logins?returnUrl=' + 'http://localhost:3000', config)
      .then(res => {
        dispatch(loadExternalLoginsSuccess(res.data));
      });
  };
}