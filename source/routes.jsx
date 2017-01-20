import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainLayout from './layouts/main.layout';
import ReadmeLayout from './layouts/readme.layout';

import HomePage from './components/home/home.page';
import ChatPage from './components/chat/chat.page';
import ProfilePage from './components/profile/profile.page';
import CoursesPage from './components/course/courses.page';
import ManageCoursePage from './components/course/manage.course.page';
import SignupPage from './components/auth/signup.page';

import NotFoundPage from './components/error/not.found.page';

const requireAuth = (nextState, replaceState, callback) => {

    const state = {
        user: null
    };

    if (state.user === null) {
        replaceState({
            pathname: '/signin',
            state: { nextPathname: nextState.location.pathname }
        });
    }
    callback();
};

export default (
    <Route path="/">
        <Route component={MainLayout}>
            <IndexRoute component={HomePage} />
            <Route path="/profile" component={ProfilePage} onEnter={requireAuth} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course" component={ManageCoursePage} />
            <Route path="/course/:id" component={ManageCoursePage} />
            <Route path="/chat" component={ChatPage} />
        </Route>

        <Route path="/readme" component={ReadmeLayout}>
            
        </Route>

        <Route path="*" components={NotFoundPage} />
    </Route>
);

