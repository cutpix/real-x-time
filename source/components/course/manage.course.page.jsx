import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/course.actions';
import PageContent from '../common/page.content';
import CourseForm from './course.form';


class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;

        course[field] = event.target.value;

        return this.setState({
            course
        });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render() {
        return (
            <PageContent>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    course={this.state.course}
                    errors={this.state.errors} />
            </PageContent>
        );
    }
}

// validation rules
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// pull in the react router context so router is available on this.context.router.
ManageCoursePage.contextTypes = {
    router: PropTypes.object.isRequired
};

// private helpers
function getCourseById(courses, courseId) {
    const course = courses.find(course => course.id === courseId);
    if (course) return course;
    return null;
}

// redux setup functions
function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;

    let course = { id: '', title: '', ext_url: '', author_id: '', length: '', category: '' };

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);