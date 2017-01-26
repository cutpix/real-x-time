import delay from './delay';

const courses = [{
        id: 'building-applications-with-react-redux-in-es6',
        title: 'Building Applications with React and Redux in ES6',
        ext_url: 'https://www.pluralsight.com/courses/react-redux-react-router-es6',
        author_id: 'cory-house',
        length: '5:08',
        category: 'JavaScript'
    },
    {
        id: 'ecmascript-6-es6-modules-es2015-import-and-export',
        title: 'ES6 Modules (ES2015) - Import and Export',
        ext_url: 'https://egghead.io/lessons/ecmascript-6-es6-modules-es2015-import-and-export',
        length: '0:08',
        category: 'JavaScript'
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(x => x.id === course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    course.id = generateId(course);
                    course.ext_url = `https://google.com/#q=${course.id}`;
                    courses.push(course);
                }
                resolve(Object.assign({}, course));
            }, delay);
        });
    }
}

export default CourseApi;