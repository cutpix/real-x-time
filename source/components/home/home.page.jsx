import React, { Component, PropTypes } from 'react';
import SiteWrapper from '../common/site.wrapper';
import Hero from '../common/hero';
import Divider from '../common/divider';
import PageContent from '../common/page.content';

import pages from 'data/pages';

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const banner = pages.home.content.find(c => c.type === 'banner');
        return (
            <SiteWrapper>
                <Hero {...banner} />
                <Divider />
                <PageContent role="main">
                    <div className="title-list">
                        <h1>Top TV picks for Jack</h1>
                        <div className="titles-wrapper">
                        </div>
                    </div>
                </PageContent>
            </SiteWrapper>
        );
    }
}

export default HomePage;