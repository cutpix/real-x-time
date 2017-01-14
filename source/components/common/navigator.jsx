import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigator extends Component {
    render() {
        const links = [
            '/profile', '/courses'
        ];
        return (
            <ul className="header-nav left" role="navigation">
                <li className="header-nav-item">
                    <Link className="header-nav-link" to="/profile" activeClassName="active">Profile</Link>
                </li>
                <li className="header-nav-item">
                    <Link className="header-nav-link" to="/courses" activeClassName="active">Courses</Link>
                </li>
                <li className="header-nav-item">
                    <Link className="header-nav-link" to="/chat" activeClassName="active">Chat</Link>
                </li>
            </ul>
        );
    }
}