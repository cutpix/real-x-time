import React from 'react';

import SiteWrapper from '../common/site.wrapper';
import PageContent from '../common/page.content';
import SoundCloudPlayer from '../soundcloud/soundcloud.player';

import tracks from 'data/audio.tracks';

const ReadmePage = () => {
    return (
        <SiteWrapper>
            <PageContent role="readme">
                <SoundCloudPlayer>
                    {
                        tracks.map((index, track) => {
                            return <div className="track">{track.title}</div>;
                        })
                    }
                </SoundCloudPlayer>
            </PageContent>
        </SiteWrapper>
    );
};


export default ReadmePage;