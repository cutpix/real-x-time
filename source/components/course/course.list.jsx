import React, {Component, PropTypes} from 'react';
import CourseListRow from './course.list.row';

const CourseList = ({courses}) => {
    return (
        <div className="course-list">
            {
                courses.map(course =>
                    <CourseListRow key={course.id} course={course} />
                )
            }
        </div>
    );
};

// validation rules
CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;