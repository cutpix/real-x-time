import * as types from './action.types';

export function connect(url) {
    return {
        type: types.CONNECT,
        url
    };
}

export function connecting() {
    return {
        type: types.CONNECTING,
        status: 'connecting'
    };
}

export function connected() {
    return {
        type: types.CONNECTED,
        status: 'connected'
    };
}

export function disconnect() {
    return {
        type: types.DISCONNECT
    };
}

export function disconnected() {
    return {
        type: types.DISCONNECTED,
        status: 'disconnected'
    };
}