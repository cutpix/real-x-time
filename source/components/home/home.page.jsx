import React, { Component, PropTypes } from 'react';
import ModelList from './model.list';
import PageContent from '../common/page.content';

const persons = [];

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <PageContent role='main'>
                <ModelList data={persons} />
            </PageContent>
        );
    }
}

export default HomePage;