import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/common/header';


const ReadmeLayout = (props) => {
  return (
    <div className="readme-page">
      <Header />
      {props.children}
    </div>
  );
};

// validation rules
ReadmeLayout.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

// redux setup functions for smart container component
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
};

export default connect(mapStateToProps)(ReadmeLayout);