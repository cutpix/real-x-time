import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const ReadmeLayout = (props) => {
  return (
    <div className="readme-page">
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
    loading: state.ajaxCallsInProgress > 0
  };
};

export default connect(mapStateToProps)(ReadmeLayout);