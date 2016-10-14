import colors from 'colors';

/* eslint-disable no-console */

class Notifier {
    constructor(env) {
        this.env = {
            mode: env.NODE_ENV
        };
    }

    getBuildStatus() {
        return getStatusMessage(this.env.mode);
    }

    print(type, msg) {

        switch (type) {
            case 'ENV':
                console.log(this.getBuildStatus());
                break;
            case 'ERROR':
                console.log(msg.red.bold);
                break;
            case 'SUCCESS':
                console.log(msg.blue.bold);
                break;
        }
    }
}

export default function createNotifier(env) {
    return new Notifier(env);
}

// private helpers
function getStatusMessage(mode) {
    let msg = 'Running application in '.green.bold;

    if (mode === 'development') {
        return msg += '['.red + (mode) + ']'.red + ' mode ...'.green.bold;
    } else if (mode === 'production') {
        return msg += '['.blue + (mode) + ']'.blue + ' mode ...'.green.bold;
    } else {
        return `Running application without environment variable: ${mode}`.red.bold;
    }
}