import React from 'react';
import { connect } from 'react-redux';

import SiteWrapper from '../common/site.wrapper';
import PageContent from '../common/page.content';
import SoundCloudPlayer from '../soundcloud/soundcloud.player';
import Stream from '../soundcloud/stream';
import PreformattedMessage from './../common/preformatted.message';

const ReadmePage = (props) => {
  return (
    <SiteWrapper>
      <PageContent role="readme">
        <img src="./images/biometric-b.svg" />
        <SoundCloudPlayer title="We Eat Brains!">
          <Stream tracks={props.tracks} />
        </SoundCloudPlayer>
      </PageContent>
    </SiteWrapper>
  );
};

// redux setup function
const mapStateToProps = (state, ownProps) => {
  return {
    //TODO: fetch data from remote soundcloud mock api
    tracks: []
  };
};

export default connect(mapStateToProps)(ReadmePage);