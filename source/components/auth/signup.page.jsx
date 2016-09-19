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
            errors: {}
        };

        this.updateModelState = this.updateModelState.bind(this);
        this.signupUser = this.signupUser.bind(this);
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

        this.props.actions.userSignupRequest(this.state.model)
            .catch(error => {
                toastr.error(error);
            });
    }

    render() {
        return (
            <PageContent>
                <SignupForm
                    model={this.state.model}
                    onChange={this.updateModelState}
                    onSubmit={this.signupUser}
                    errors={this.state.errors} />

                <ExternalLoginList providers={this.props.externalLogins} />
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