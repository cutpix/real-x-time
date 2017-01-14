import React from 'react';

const SiteWrapper = (props) => {
    return (
        <div className="site-wrapper">
            {props.children}
        </div>
    );
};

export default SiteWrapper;