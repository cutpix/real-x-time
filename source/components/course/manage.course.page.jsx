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
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        
        course[field] = event.target.value;

        return this.setState({
            course
        });
    }

    render() {
        return (
            <PageContent>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    course={this.state.course}
                    errors={this.state.errors} />
            </PageContent>
        );
    }
}

// validation rules
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

// redux setup functions
function mapStateToProps(state, ownProps) {
    let course = { id: '', title: '', ext_url: '', author_id: '', length: '', category: '' };

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