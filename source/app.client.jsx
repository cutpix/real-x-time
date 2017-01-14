import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configure.store';
import initialState from './reducers/initial.state';
import { loadCourses } from './actions/course.actions';
import { loadAuthors } from './actions/author.actions';
import { loadLoginProviders } from './actions/auth.actions';
import 'css/styles.css';
import 'css/components.css';
import 'toastr/build/toastr.min.css';

const store = configureStore(initialState);

store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadLoginProviders());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);