import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/course.actions';


class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // child functions that is called in render func
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }

    render() {
        return (
            <div className="page-content">
                <div className="container clearfix">
                    <h1 className="title">Courses</h1>
                    {
                        this.props.courses.map(this.courseRow)
                    }
                    <h2>Add Course</h2>

                    <input type="text"
                        onChange={this.onTitleChange}
                        value={this.state.course.title} />

                    <input type="submit"
                        value="Save"
                        onClick={this.onClickSave} />
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

//
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
//      createCourse: course => dispatch(courseActions.createCourse(course))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);