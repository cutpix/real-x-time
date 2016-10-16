import React, { Component } from 'react';


class SocialLogin extends Component {
    constructor(props) {
        super(props);

        this.handleExternalAuth = this.handleExternalAuth.bind(this);
    }

    handleExternalAuth(e) {
        e.preventDefault();
        const provider = this.props.provider;
        let extWindow = window.open(
            provider.url,
            'Authentication Account',
            'location=0,status=0,width=600,height=750'
        );
        let interval = window.setInterval(() => {
            if (extWindow.location.href.indexOf('/signup')) {
                clearInterval(interval);

                const url = extWindow.document.URL;
                let queryString = url.substring(url.indexOf('#') + 1);

                const login = {};
                queryString.replace(
                    new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
                    function ($0, $1, $2, $3) { login[$1] = $3; }
                );

                extWindow.close();
                this.props.callback(login);
            }


        }, 1000);
    }

    render() {
        return (
            <button className='btn-block' onClick={this.handleExternalAuth}>
                Connect with {this.props.provider.name}
            </button>
        );
    }

}

export default SocialLogin;