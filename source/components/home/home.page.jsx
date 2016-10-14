import React, { Component, PropTypes } from 'react';
import ModelList from './model.list';
import PageContent from '../common/page.content';

const data = ['Paddy O\'Brian', 'Jay Roberts', 'Alex Mecum'];

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <PageContent role={"main"}>
                <ModelList data={data} />
            </PageContent>
        );
    }
}

export default HomePage;