import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import configureStore from './store/configure.store';
import 'css/styles.css';
import routes from './routes';

import {loadCourses} from './actions/course.actions';


const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);