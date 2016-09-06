import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/course.actions';
import CourseList from './course.list';
import {browserHistory} from 'react-router';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage(event) {
        event.preventDefault();
        browserHistory.push('/course');
    }

    render() {
        return (
            <div className="page-content">
                <div className="container clearfix">
                    <h1 className="title">Courses</h1>
                    <input type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage} />
                    <CourseList courses={this.props.courses} />
                </div>
            </div>
        );
    }
}

// validation rules
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


// redux setup functions
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //createCourse: course => dispatch(courseActions.createCourse(course))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);