import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configure.store';
import {loadCourses} from './actions/course.actions';
import {loadAuthors} from './actions/author.actions';
import 'css/styles.css';
import 'css/components.css';


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);