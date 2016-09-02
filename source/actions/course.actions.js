import * as types from './action.types';
import CourseApi from '../api/course.api.mock';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}


// thunks
export function loadCourses() {
    // thunk always return a func that accept dispatch
    return function (dispatch) {
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveCourse(course) {
    return dispatch => {
        return CourseApi.saveCourse(course).then(course => {
            course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
        }).catch(error => {
            throw (error);
        });
    };
}