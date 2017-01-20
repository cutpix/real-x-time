import React from 'react';

const errors = {
    401: `if(statusCode === 401){
    console.log("Unauthorized request.")
}`, 404: `if(statusCode === 404){
    console.log("Page not found.")
}`};

const PreformattedMessage = ({code}) => {
    return <pre>{errors[code]}</pre>;
};

export default PreformattedMessage;