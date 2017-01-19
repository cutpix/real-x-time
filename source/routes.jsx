import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout';
import HomePage from './components/home/home.page';
import ChatPage from './components/chat/chat.page';
import ProfilePage from './components/profile/profile.page';
import CoursesPage from './components/course/courses.page';
import ManageCoursePage from './components/course/manage.course.page';
import SignupPage from './components/auth/signup.page';
import NotFoundPage from './components/error/not.found.page';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/chat" component={ChatPage} />

        <Route path="*" component={NotFoundPage} />
    </Route>
);