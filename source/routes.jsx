import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from './pages/layout';
import HomePage from './pages/home';
import GitHubPage from './pages/github';
import ResumePage from './pages/resume';

// const routes = (
//     <Route name="layout" path="/" handler={Layout}>
//     </Route>
// );

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="/profile/github" component={GitHubPage} />
        <Route path="/profile/resume" component={ResumePage} />
    </Route>
);