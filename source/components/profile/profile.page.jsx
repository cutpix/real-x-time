import React, { Component } from 'react';
import PageContent from '../common/page.content';

export default class ProfilePage extends Component {
    render() {
        return (
            <PageContent role='main'>
                <h1 className='title'>Profile</h1>
                <p className='description'>Tell us about your self.</p>
            </PageContent>
        );
    }
}