import AuthorApi from '../api/author.api.mock';
import * as types from './action.types';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// thunks
export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw error;
        });
    };
}