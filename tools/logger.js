import colors from 'colors';
import builder from './message.builder';

export function createLogger(env) {
    const notifier = new Logger(env);
    return notifier;
}

export default class Logger {
    constructor(env) {
        this.env = {
            mode: env.NODE_ENV
        };
    }

    /* eslint-disable no-console */

    printStart(url) {
        const envModeMsg = builder.getEnvModeMessage(this.env.mode);
        const startMsg = builder.getStartMessage(url);
        console.log(envModeMsg);
        console.log(startMsg);
    }

    printError(text) {
        const message = builder.getErrorMessage(text);
        console.error(message);
    }

    /* eslint-enable no-console */
}