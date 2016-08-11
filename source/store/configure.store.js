import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root.reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// good way to initialize your store with some state 
// a specialy then doing server side rendering
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}