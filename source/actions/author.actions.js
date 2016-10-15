import AuthorApi from '../api/author.api.mock';
import * as types from './action.types';
import { beginAjaxCall } from './ajax.status.actions';


export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// thunks
export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw (error);
        });
    };
}