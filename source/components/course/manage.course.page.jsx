import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/course.actions';

import CourseForm from './course.form';
import PageContent from '../common/page.content';


class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <PageContent>
                <CourseForm
                    allAuthors={[]}
                    course={this.state.course}
                    errors={this.state.errors} />
            </PageContent>
        );
    }
}

// validation rules
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

// redux setup functions
function mapStateToProps(state, ownProps) {
    let course = { id: '', title: '', ext_url: '', author_id: '', length: '', category: '' };
    return {
        course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);