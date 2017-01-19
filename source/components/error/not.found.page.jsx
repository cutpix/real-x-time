/* This is the page we show when the user visits a url that doesn't have a route */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import PageContent from '../common/page.content';

const NotFoundPage = () => {
    return (
        <PageContent>
            <div className="error-pages">
                <div className="ep-container">
                    <Link className="close-editor" to="/">
                        <i className="mdi mdi-close" />
                    </Link>
                </div>
            </div>
        </PageContent>
    );
};

export default NotFoundPage;