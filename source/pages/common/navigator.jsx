import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navigator extends Component {
    render() {
        const links = [
            '/profile/github', '/profile/medium'
        ];
        return (
            <ul className="header-nav left" role="navigation">
                <li className="header-nav-item">
                    <Link className="header-nav-link" to="/profile/github" activeClassName="active">GitHub</Link>
                </li>
                <li className="header-nav-item">
                    <Link className="header-nav-link" to="/profile/resume" activeClassName="active">Resume</Link>
                </li>
            </ul>
        );
    }
}