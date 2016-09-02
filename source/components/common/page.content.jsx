import React from 'react';


const PageContent = (props) => {
    return (
        <div className="page-content">
            <div className="container clearfix">
                {props.children}
            </div>
        </div>
    );
};

export default PageContent;