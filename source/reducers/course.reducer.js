import * as types from '../actions/action.types';
import initialState from './initial.state';

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE:
            // state.push(action.course);
            // return state;
            // create new array with extra value using spread operator (...)
            return [...state, Object.assign({}, action.course)];
            
        default:
            return state;
    }
}