import React, {PropTypes} from 'react';
import SocialLogin from './social.login';


const ExternalLoginList = ({providers, callback}) => {
    return (
        <div className="external-login-list">
            {
                providers.map(provider =>
                    <SocialLogin key={provider.name} provider={provider} callback={callback} />
                )
            }
        </div>
    );
};

ExternalLoginList.propTypes = {
    providers: PropTypes.array.isRequired
};

export default ExternalLoginList;