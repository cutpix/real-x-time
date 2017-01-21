import React from 'react';

import SiteWrapper from '../common/site.wrapper';
import PageContent from '../common/page.content';

const ReadmePage = () => {
    return (
        <SiteWrapper>
            <PageContent>
                <a href="http://www.capterra.com/history-of-software" target="_blank">
                    <img width="640" border="0" alt="The History of Software" src="http://cdn0.capterra-static.com/infographics/history-of-software.png" />
                </a>
                <a href="http://www.capterra.com/infographics/anatomy-of-software-landing-page" target="_blank">
                    <img width="640" border="0" alt="Anatomy of a Software Landing Page" src="http://cdn0.capterra-static.com/infographics/anatomy-of-software-landing-page.png" />
                </a>
            </PageContent>
        </SiteWrapper>
    );
};

export default ReadmePage;