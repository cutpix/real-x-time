import React, {PropTypes} from 'react';
import Header from './common/header';

const Layout = (props) => {
    return (
        <div className="page">
            <Header />
            {props.children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired
};

export default Layout;