import React, { Component, PropTypes } from 'react';


export default class SoundCloudPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="soundcloud-player">
        <h2 className="profile">
          {this.props.title}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

SoundCloudPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};