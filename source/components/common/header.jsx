import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';
import Navigator from './navigator';
import LoadingDots from './loading.dots';


const Header = ({loading}) => {
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
            </div>
        </div>
    );
};

// validation rules
Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;