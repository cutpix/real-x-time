import React, {Component} from 'react';


// const SocialLogin = ({provider}) => {
//     return <a href={provider.url}>{provider.name}</a>;
// };

// const SocialLogin = ({provider}) => {


//     const handleExternalAuth = event => {
//         event.preventDefault();

//         const authWindowReference = window.open(
//             provider.url,
//             'Authenticate Account',
//             'location=0,status=0,width=600,height=750'
//         );

//         debugger;
//     };
//     return (
//         <button className="btn-block" onClick={handleExternalAuth}>
//             Connect with {provider.name}
//         </button>
//     );
// };

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
            if (extWindow.closed) {
                window.clearInterval(interval);
                const url = extWindow.document.URL;
                let queryString = url.substring(url.indexOf('#') + 1);

                const model = {};
                queryString.replace(
                    new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
                    function ($0, $1, $2, $3) { model[$1] = $3; }
                );
                this.props.callback(model);
            }
        }, 1000);
    }

    render() {
        return (
            <button className="btn-block" onClick={this.handleExternalAuth}>
                Connect with {this.props.provider.name}
            </button>
        );
    }

}

export default SocialLogin;