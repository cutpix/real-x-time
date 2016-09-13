import React, {Component, PropTypes} from 'react';
import PageContent from '../common/page.content';
import SignupForm from './signup.form';

class SignupPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <PageContent>
                <SignupForm
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    passwordConfirmation={this.passwordConfirmation}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    errors={this.state.errors} />
            </PageContent>
        );
    }
}

SignupPage.propTypes = {

};

export default SignupPage;