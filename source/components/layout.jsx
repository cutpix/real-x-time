import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/header';

const Layout = (props) => {
    return (
        <div className='page'>
            <Header loading={props.loading} />
            {props.children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(Layout);