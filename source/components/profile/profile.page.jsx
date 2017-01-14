import React, { Component, PropTypes } from 'react';
import PageContent from '../common/page.content';

import pages from 'data/pages';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageContent role="main">
                <h1 className="title">{this.props.title}</h1>
                <div className="description">{this.props.description}</div>
            </PageContent>
        );
    }
}

// validation rules
ProfilePage.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

// default container values
ProfilePage.defaultProps = {
    title: pages.profile.title,
    description: pages.profile.description
};