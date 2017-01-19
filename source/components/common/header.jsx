import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Navigator from './navigator';
import LoadingDots from './loading.dots';


const Header = ({loading, isAuthenticated}) => {
    return (
        <div className="header" role="banner">
            <div className="container clearfix">
                <IndexLink className="logo" to="/" activeClassName="active">
                    <img className="octicon octicon-mark-x"
                        src="/images/logo.svg"
                        width="28" height="28" />
                </IndexLink>
                <Navigator />
                {loading && <LoadingDots interval={100} dots={20} />}
                {!isAuthenticated &&
                    <ul className="header-nav user-nav right">
                        <li className="header-nav-item">
                            <Link className="header-nav-link" to="/signup" activeClassName="active">Sign Up</Link>
                        </li>
                        <li className="header-nav-item">.</li>
                        <li className="header-nav-item">
                            <Link className="header-nav-link" to="/signin" activeClassName="active">Sign In</Link>
                        </li>
                    </ul>
                }
            </div>
        </div>
    );
};

// validation rules
Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default Header;