import * as actions from '../actions/web.socket.actions';

const webSocketMiddleware = () => {
    let socket = null;

    const onOpen = (ws, store, token) => evt => {
        // send a handshake, or authenticate with remote end

        // tell the store we're connected'
        store.dispatch(actions.connected());
    };

    const onClose = (ws, store) => evt => {
        // tell the store we've disconnected
        store.dispatch(actions.disconnected());
    };

    const onMessage = (ws, store) => evt => {
        let msg = JSON.parse(evt.data);
        switch (msg.type) {
            case 'CONNECTION':
                console.log(`Connection message: ${msg.text}`);
                break;

            case 'CHAT_MESSAGE':

                break;

            default:
                console.log(`Received unknown message type: ${msg.type}`);
                break;
        }
    };

    return store => next => action => {

        switch (action.type) {

            // the user wants us to connect
            case 'CONNECT':
                // start a new connection to the server
                if (socket !== null) {
                    socket.close();
                }
                // send an action that shows a "connecting..." status for now
                store.dispatch(actions.connecting());

                // attempt to connect (we could send a 'failed' action on error)
                socket = new WebSocket(action.url);
                socket.onmessage = onMessage(socket, store);
                socket.onclose = onClose(socket, store);
                socket.onopen = onOpen(socket, store, action.token);
                break;

            // the user wants us to disconnect
            case 'DISCONNECT':
                if (socket != null) {
                    socket.close();
                }
                socket = null;

                // set our state to disconnected
                store.dispatch(actions.disconnected());
                break;

            // send the 'SEND_MESSAGE' action down the websocket to the server
            case 'SEND_CHAT_MESSAGE':
                socket.send(JSON.stringify(action));
                break;

            // this action is irrelevant to us, pass it on to the next middleware
            default:
                return next(action);
        }
    };
};

export default webSocketMiddleware;