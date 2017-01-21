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
import ReadmePage from './components/readme/readme.page';
import NotFoundPage from './components/error/not.found.page';


export const getRoutes = (store) => {
    const requireAuth = (nextState, replace, callback) => {
        const state = store.getState();

        if (!state.auth.isAuthenticated) {
            replace({ pathname: '/signin', query: { redirect_uri: nextState.location.pathname } });
        }
        callback();
    };

    return (
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

            <Route component={ReadmeLayout}>
                <Route path="/readme" component={ReadmePage} />
            </Route>

            <Route path="*" components={NotFoundPage} />
        </Route>
    );
};