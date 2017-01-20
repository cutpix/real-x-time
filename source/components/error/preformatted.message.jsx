/*
* https://github.com/chjj/marked 
* A full-featured markdown parser and compiler, written in JavaScript. 
*/

import React from 'react';
import marked from 'marked';


const messages = {
    401: 'if(statusCode === <span class="blue">401</span>){\n&nbsp;&nbsp;&nbsp;&nbsp;console.log(<span class="red">"Unauthorized."</span>)\n}',
    404: 'if(statusCode === <span class="blue">404</span>){\n&nbsp;&nbsp;&nbsp;&nbsp;console.log(<span class="red">"Page not found."</span>)\n}'
};


const PreformattedMessage = ({statusCode}) => {
    return (
        <pre dangerouslySetInnerHTML={{ __html: marked(messages[statusCode]) }} />
    );
};

export default PreformattedMessage;