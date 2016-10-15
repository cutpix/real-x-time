/* eslint-disable no-console */

import colors from 'colors';

export default class Logger {
    constructor(env) {
        this.env = {
            mode: env.NODE_ENV
        };
    }

    builded() {
        const buildMessage = getEnvBuildMessage(this.env.mode);
        console.log(buildMessage);
    }

    started(url) {
        const startMessage = `Server is started on ${url}`;
        console.log(startMessage.blue.bold);
    }

    error(message) {
        console.error(message.red.bold);
    }
}


export function createLogger(env) {
    const notifier = new Logger(env);
    return notifier;
}

// private helpers
function getEnvBuildMessage(mode) {
    let msg = 'Running application in '.green.bold;

    if (mode === 'development') {
        return msg += '['.red + (mode) + ']'.red + ' mode'.green.bold;
    } else if (mode === 'production') {
        return msg += '['.blue + (mode) + ']'.blue + ' mode'.green.bold;
    } else {
        return `Running application without environment variable: ${mode}`.red.bold;
    }
}