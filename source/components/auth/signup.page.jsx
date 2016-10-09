import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/auth.actions';
import PageContent from '../common/page.content';
import SignupForm from './signup.form';
import ExternalLoginList from './external.login.list';
import toastr from 'toastr';


class SignupPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            model: Object.assign({}, this.props.model),
            errors: {},
            isLoading: false
        };

        this.updateModelState = this.updateModelState.bind(this);
        this.signupUser = this.signupUser.bind(this);
        this.handleSocialSignup = this.handleSocialSignup.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    updateModelState(event) {
        event.preventDefault();

        const field = event.target.name;
        let model = this.state.model;

        model[field] = event.target.value;

        this.setState({
            model
        });
    }

    signupUser(event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        this.props.actions.userSignupRequest(this.state.model)
            .then(() => this.redirect())
            .catch((error) => {
                this.setState({ isLoading: false });
                toastr.error(error);

                // todo: move this code to api call wrapper in promise 
                var modelErrors = error.response.data.modelState;

                this.setState({
                    errors: {
                        username: modelErrors['model.Username'],
                        email: modelErrors['model.Email']
                    }
                });
            });
    }

    handleSocialSignup(login) {
        this.context.router.push('/signup-' + login.provider.toLowerCase());
    }

    redirect() {
        this.setState({ isLoading: false });
        this.context.router.push('/');
    }

    render() {
        return (
            <PageContent>
                <SignupForm
                    model={this.state.model}
                    onChange={this.updateModelState}
                    onSubmit={this.signupUser}
                    errors={this.state.errors}
                    isLoading={this.state.isLoading} />

                <ExternalLoginList
                    providers={this.props.externalLogins}
                    callback={this.handleSocialSignup} />
            </PageContent>
        );
    }
}

SignupPage.propTypes = {
    externalLogins: PropTypes.array.isRequired,
    model: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

SignupPage.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let model = { username: '', email: '', password: '', passwordConfirmation: '', timezoneId: '' };

    return {
        model,
        externalLogins: state.externalLogins
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);