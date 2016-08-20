import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import Navigator from './navigator';

export default class Header extends Component {
    render() {
        return (
            <div className="header" role="banner">
                <div className="container clearfix">
                    <IndexLink className="logo" to="/" activeClassName="active">
                        <img className="octicon octicon-mark-x"
                            src="/images/logo.svg"
                            width="28" height="28" />
                    </IndexLink>
                    <Navigator track={this._track} />
                </div>
            </div>
        );
    }
    _track(label) {
        console.log('Tracking: ${label}');
    }
}