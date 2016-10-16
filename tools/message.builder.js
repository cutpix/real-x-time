import colors from 'colors';

class MessageBuilder {
    static getEnvModeMessage(mode) {
        let msg = 'Running application in '.green.bold;

        if (mode === 'development') {
            return msg += '['.red + (mode) + ']'.red + ' mode'.green.bold;
        } else if (mode === 'production') {
            return msg += '['.blue + (mode) + ']'.blue + ' mode'.green.bold;
        } else {
            return `Running application without environment variable: ${mode}`.red.bold;
        }
    }

    static getStartMessage(url) {
        const message = `Server is started on ${url}`.blue.bold;
        return message;
    }

    static getErrorMessage(message) {
        return message.red.bold;
    }
}

export default MessageBuilder;