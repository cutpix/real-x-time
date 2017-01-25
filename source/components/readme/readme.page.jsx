import React from 'react';

import SiteWrapper from '../common/site.wrapper';
import PageContent from '../common/page.content';
import SoundCloudPlayer from '../soundcloud/soundcloud.player';
import Stream from '../soundcloud/stream';

import tracks from 'data/soundcloud.tracks';

const ReadmePage = () => {
    return (
        <SiteWrapper>
            <PageContent role="readme">
                <SoundCloudPlayer title="We Eat Brains!">
                    <Stream tracks={tracks} />
                </SoundCloudPlayer>
            </PageContent>
        </SiteWrapper>
    );
};


export default ReadmePage;