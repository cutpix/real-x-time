import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MainLayout from '../../layouts/main.layout';
import PreformattedMessage from '../common/preformatted.message';


const errors = [
    {
        code: 401,
        message: 'if(statusCode === <span class="blue">401</span>){\n&nbsp;&nbsp;&nbsp;&nbsp;console.log(<span class="red">"Unauthorized."</span>)\n}'
    },
    {
        code: 404,
        message: 'if(statusCode === <span class="blue">404</span>){\n&nbsp;&nbsp;&nbsp;&nbsp;console.log(<span class="red">"Page not found."</span>)\n}'
    }
];

const NotFoundPage = () => {
    const error = errors.find(error => error.code === 404);

    return (
        <MainLayout>
            <div className="content-area error-pages">
                <div className="ep-container">
                    <Link className="close-editor" to="/">
                        <i className="mdi mdi-close" />
                    </Link>
                    <PreformattedMessage message={error.message} />
                </div>
            </div>
        </MainLayout>
    );
};

export default NotFoundPage;