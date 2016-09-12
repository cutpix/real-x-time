var colors = require('colors');
var message = getMessage({ mode: '"dev"' });

function getMessage(env) {
    var msg = 'Running application in '.green.bold;
    if (env.mode === 'production') {
        msg += '['.blue + (env.mode) + ']'.blue + ' mode ...'.green.bold;
    }
    else {
        msg += '['.red + (env.mode) + ']'.red + ' mode ...'.green.bold;
    }
    return msg;
}

/* eslint-disable no-console */

console.log(message);