import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from './pages/layout';
import HomePage from './pages/home.page';
import ProfilePage from './pages/profile.page';
import CoursesPage from './pages/courses.page';

// const routes = (
//     <Route name="layout" path="/" handler={Layout}>
//     </Route>
// );

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/courses" component={CoursesPage} />
    </Route>
);