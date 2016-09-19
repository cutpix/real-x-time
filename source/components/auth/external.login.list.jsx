import React, {PropTypes} from 'react';


const ExternalLoginList = ({providers}) => {
    return (
        <div className="external-login-list">
            {
                providers.map(provider =>
                    <a href={provider.url} key={provider.name}>{provider.name}</a>
                )
            }
        </div>
    );
};

ExternalLoginList.propTypes = {
    providers: PropTypes.array.isRequired
};

export default ExternalLoginList;