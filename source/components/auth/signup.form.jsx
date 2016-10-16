import React, { PropTypes } from 'react';
import TextInput from '../common/text.input';
import PasswordInput from '../common/password.input';
import SelectInput from '../common/select.input';


const SignupForm = ({model, onChange, onSubmit, errors, isLoading}) => {
    return (
        <form onSubmit={onSubmit}>
            <h1>Sign up page</h1>

            <TextInput
                name='username'
                label='Username'
                value={model.username}
                onChange={onChange}
                error={errors.username} />

            <TextInput
                name='email'
                label='Email'
                value={model.email}
                onChange={onChange}
                error={errors.email} />

            <PasswordInput
                name='password'
                label='Password'
                value={model.password}
                onChange={onChange}
                error={errors.password} />

            <PasswordInput
                name='passwordConfirmation'
                label='Password Confirmation'
                value={model.passwordConfirmation}
                onChange={onChange}
                error={errors.passwordConfirmation} />

            <SelectInput
                name='timezoneId'
                label='Timezone'
                value={model.timezoneId}
                defaultOption='Select Timezone'
                options={[]}
                onChange={onChange}
                error={errors.timezoneId} />

            <button className='btn btn-primary' type='submit' disabled={isLoading}>Sign up</button>
        </form>
    );
};


export default SignupForm;