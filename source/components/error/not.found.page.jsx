import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MainLayout from '../../layouts/main.layout';
import PreformattedMessage from './preformatted.message';

const NotFoundPage = () => {
    return (
        <MainLayout>
            <div className="content-area error-pages">
                <div className="ep-container">
                    <Link className="close-editor" to="/">
                        <i className="mdi mdi-close" />
                    </Link>
                    <PreformattedMessage statusCode={404} />
                </div>
            </div>
        </MainLayout>
    );
};

export default NotFoundPage;