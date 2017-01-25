import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CourseListRow = ({course}) => {
    return (
        <div className="course-row">
            <div className="body">
                <img className="category-icon" src="./images/idea-a.svg" />
                <div className="title">
                    <Link to={'/course/' + course.id}>{course.title}</Link>
                </div>
                <div className="details clearfix">
                    <span>{course.category}</span>
                </div>
            </div>
        </div>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;