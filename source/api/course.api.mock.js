import delay from './delay';

const courses = [
    {
        id: 'building-applications-with-react-redux-in-es6',
        title: 'Building Applications with React and Redux in ES6',
        ext_url: 'https://www.pluralsight.com/courses/react-redux-react-router-es6',
        author_id: 'cory-house',
        length: '5:08',
        category: 'JavaScript'
    }
];

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }
}

export default CourseApi;