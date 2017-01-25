import React from 'react';

import SiteWrapper from '../common/site.wrapper';
import PageContent from '../common/page.content';
import SoundCloudPlayer from '../soundcloud/soundcloud.player';
import Stream from '../soundcloud/stream';
import PreformattedMessage from './../common/preformatted.message';

import tracks from 'data/soundcloud.tracks';

const ReadmePage = () => {
    return (
        <SiteWrapper>
            <PageContent role="readme">
                <img src="./images/biometric-b.svg" />
                <SoundCloudPlayer title="We Eat Brains!">
                    <Stream tracks={tracks} />
                </SoundCloudPlayer>
            </PageContent>
        </SiteWrapper>
    );
};


export default ReadmePage;