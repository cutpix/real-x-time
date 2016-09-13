import React, {Components, PropTypes} from 'react';
import TextInput from '../common/text.input';
import PasswordInput from '../common/password.input';

const SignupForm = ({username, email, password, passwordConfirmation, onChange, onSubmit, errors}) => {
    return (
        <form onSubmit={onSubmit}>
            <h1>Sign up page</h1>

            <TextInput
                name="username"
                label="Username"
                value={username}
                onChange={onChange}
                error={errors.username} />

            <TextInput
                name="email"
                label="Email"
                value={email}
                onChange={onChange}
                error={errors.email} />

            <PasswordInput
                name="password"
                label="Password"
                value={password}
                onChange={onChange}
                error={errors.password} />

            <PasswordInput
                name="passwordConfirmation"
                label="Password Confirmation"
                value={passwordConfirmation}
                onChange={onChange}
                error={errors.passwordConfirmation} />

            <button className="btn btn-primary" type="submit">Sign up</button>
        </form>
    );
};

export default SignupForm;