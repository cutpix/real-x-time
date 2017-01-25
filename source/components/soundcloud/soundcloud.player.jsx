import React, { Component, PropTypes } from 'react';


export default class SoundCloudPlayer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="soundcloud-player">
                SoundCloud Player
                {this.props.children}
            </div>
        );
    }
}

SoundCloudPlayer.propTypes = {
    children: PropTypes.array.isRequired
};