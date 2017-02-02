import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/header';

const ReadmeLayout = (props) => {
  return (
    <div className="page readme">
      <Header loading={props.loading} isAuthenticated={props.isAuthenticated} />
      {props.children}
    </div>
  );
};

// validation rules
ReadmeLayout.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

// redux setup function for state mapping
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(ReadmeLayout);