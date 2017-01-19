import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root.reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import webSocket from '../middleware/web.socket.middleware';
import logger from '../middleware/logger.middleware';

// good way to initialize your store with some state 
// a specialy then doing server side rendering
export default function configureStore(initialState) {

    // Middleware Configuration
    const middleware = [thunk, webSocket(), /*logger,*/ reduxImmutableStateInvariant()];

    // Store Enhancers
    const enhancers = [];
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }

    // Store Instantiation and HMR Setup
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/root.reducer', () => {
            const nextRootReducer = require('../reducers/root.reducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}