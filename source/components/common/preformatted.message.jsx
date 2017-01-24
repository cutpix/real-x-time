import React from 'react';
import marked from 'marked';


const PreformattedMessage = ({message}) => {
    return (
        <pre dangerouslySetInnerHTML={{ __html: marked(message) }} />
    );
};

export default PreformattedMessage;