import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/header';

const MainLayout = (props) => {
    return <div className="page">
        <Header loading={props.loading} isAuthenticated={props.isAuthenticated} />
        {props.children}
    </div>;
};

MainLayout.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(MainLayout);