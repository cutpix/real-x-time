import * as types from '../actions/action.types';
import initialState from './initial.state';


export default function externalLoginReducer(state = initialState.externalLogins, action) {
    switch (action.type) {
        case types.LOAD_EXTERNAL_LOGINS:
            return action.externalLogins;

        default:
            return state;
    }
}