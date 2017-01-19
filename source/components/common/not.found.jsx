import React from 'react';
import { Link } from 'react-router';
import SiteWrapper from './site.wrapper';
import PageContent from './page.content';

const NotFound = () => {
    return (
        <SiteWrapper>
            <PageContent>
                <h4>404 Page Not Found</h4>
                <Link to="/"> Go back to homepage </Link>
            </PageContent>
        </SiteWrapper>
    );
};

export default NotFound;