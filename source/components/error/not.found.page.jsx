import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import PageContent from '../common/page.content';
import PreformattedMessage from './preformatted.message';
import MainLayout from '../../layouts/main.layout';

const NotFoundPage = () => {
    return (
        <MainLayout>
            <div className="content-area error-pages">
                <div className="ep-container">
                    <Link className="close-editor" to="/">
                        <i className="mdi mdi-close" />
                    </Link>
                    <PreformattedMessage code={404} />
                </div>
            </div>
        </MainLayout>
    );
};

export default NotFoundPage;