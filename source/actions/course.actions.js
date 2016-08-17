import * as types from './action.types';
import CourseApi from '../api/course.api.mock';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course };
}

export function loadCourses() {
    // thunk always return a func that accept dispatch
    return function (dispatch) {
        return CourseApi.getAllCourses();
    };
}