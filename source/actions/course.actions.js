import * as types from './action.types';
import CourseApi from '../api/course.api.mock';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course };
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