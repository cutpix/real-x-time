import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root.reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// good way to initialize your store with some state 
// a specialy then doing server side rendering
export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
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