import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/course.actions';
import CourseForm from './course.form';


class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <CourseForm />
        );
    }
}

// validation rules
ManageCoursePage.propTypes = {

};

// redux setup functions
function mapStateToProps(state, ownProps) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);